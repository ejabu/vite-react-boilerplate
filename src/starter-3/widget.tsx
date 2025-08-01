"use client";

import { useState, useCallback, useRef } from "react";

import {
	AreaHighlight,
	Highlight,
	PdfHighlighter,
	PdfLoader,
	Popup,
	Tip,
} from "react-pdf-highlighter";
import type {
	Content,
	IHighlight,
	NewHighlight,
	ScaledPosition,
} from "react-pdf-highlighter";

import { Spinner } from "./Spinner";
import { testHighlights as _testHighlights } from "./test-highlights";

import "./app.css";
// import "@/styles/react-pdf-highlighter.css";

const testHighlights: Record<string, Array<IHighlight>> = _testHighlights;

const getNextId = () => String(Math.random()).slice(2);

const parseIdFromHash = () =>
	document.location.hash.slice("#highlight-".length);

const resetHash = () => {
	document.location.hash = "";
};

const HighlightPopup = ({
	comment,
}: {
	comment: { text: string; emoji: string };
}) =>
	comment.text ? (
		<div className="Highlight__popup">
			{comment.emoji} {comment.text}
		</div>
	) : null;

const PRIMARY_PDF_URL = "http://localhost:3004/only-tables.pdf";
const SECONDARY_PDF_URL = "https://arxiv.org/pdf/1604.02480";

const Starter3Component = () => {
	const searchParams = new URLSearchParams(document.location.search);
	const initialUrl = searchParams.get("url") || PRIMARY_PDF_URL;

	const [url, setUrl] = useState(initialUrl);
	const [highlights, setHighlights] = useState<Array<IHighlight>>(
		testHighlights[initialUrl] ? [...testHighlights[initialUrl]] : [],
	);

	const resetHighlights = () => {
		setHighlights([]);
	};

	const toggleDocument = () => {
		const newUrl =
			url === PRIMARY_PDF_URL ? SECONDARY_PDF_URL : PRIMARY_PDF_URL;
		setUrl(newUrl);
		setHighlights(
			testHighlights[newUrl] ? [...testHighlights[newUrl]] : [],
		);
	};

	const scrollViewerTo = useRef((highlight: IHighlight) => {});

	const scrollToHighlightFromHash = useCallback(() => {
		const highlight = getHighlightById(parseIdFromHash());
		if (highlight) {
			scrollViewerTo.current(highlight);
		}
	}, []);

	// useEffect(() => {
	// 	window.addEventListener("hashchange", scrollToHighlightFromHash, false);
	// 	return () => {
	// 		window.removeEventListener(
	// 			"hashchange",
	// 			scrollToHighlightFromHash,
	// 			false,
	// 		);
	// 	};
	// }, [scrollToHighlightFromHash]);

	const getHighlightById = (id: string) => {
		return highlights.find((highlight) => highlight.id === id);
	};

	const addHighlight = (highlight: NewHighlight) => {
		setHighlights((prevHighlights) => [
			{ ...highlight, id: getNextId() },
			...prevHighlights,
		]);
	};

	const updateHighlight = (
		highlightId: string,
		position: Partial<ScaledPosition>,
		content: Partial<Content>,
	) => {
		console.log("Updating highlight", highlightId, position, content);
		setHighlights((prevHighlights) =>
			prevHighlights.map((h) => {
				const {
					id,
					position: originalPosition,
					content: originalContent,
					...rest
				} = h;
				return id === highlightId
					? {
							id,
							position: { ...originalPosition, ...position },
							content: { ...originalContent, ...content },
							...rest,
					  }
					: h;
			}),
		);
	};
	return (
		<div className="App">
			<div className="relative h-screen w-screen">
				<PdfLoader url={url} beforeLoad={<Spinner />}>
					{(pdfDocument) => {
						// pdfDocument.getPage(1).then((page) => {
						// 	const viewport = page.getViewport({ scale: 1 });
						// 	const width = viewport.width;
						// 	const height = viewport.height;
						// });
						return (
							<PdfHighlighter
								pdfDocument={pdfDocument}
								enableAreaSelection={(event) => event.altKey}
								onScrollChange={() => {}}
								scrollRef={(scrollTo) => {
									scrollViewerTo.current = scrollTo;
									scrollToHighlightFromHash();
								}}
								onSelectionFinished={(
									position,
									content,
									hideTipAndSelection,
									transformSelection,
								) => <></>}
								highlightTransform={(
									highlight,
									index,
									setTip,
									hideTip,
									viewportToScaled,
									screenshot,
									isScrolledTo,
								) => {
									return <> </>;
								}}
								highlights={highlights}
							/>
						);
					}}
				</PdfLoader>
			</div>
		</div>
	);
	return (
		<div className="flex h-screen">
			<div className="relative h-screen w-screen">
				<PdfLoader url={url} beforeLoad={<Spinner />}>
					{(pdfDocument) => {
						// pdfDocument.getPage(1).then((page) => {
						// 	const viewport = page.getViewport({ scale: 1 });
						// 	const width = viewport.width;
						// 	const height = viewport.height;
						// });
						return (
							<PdfHighlighter
								pdfDocument={pdfDocument}
								enableAreaSelection={(event) => event.altKey}
								onScrollChange={resetHash}
								scrollRef={(scrollTo) => {
									scrollViewerTo.current = scrollTo;
									scrollToHighlightFromHash();
								}}
								onSelectionFinished={(
									position,
									content,
									hideTipAndSelection,
									transformSelection,
								) => (
									<Tip
										onOpen={transformSelection}
										onConfirm={(comment) => {
											addHighlight({
												content,
												position,
												comment,
											});
											hideTipAndSelection();
										}}
									/>
								)}
								highlightTransform={(
									highlight,
									index,
									setTip,
									hideTip,
									viewportToScaled,
									screenshot,
									isScrolledTo,
								) => {
									const isTextHighlight =
										!highlight.content?.image;
									const component = isTextHighlight ? (
										<Highlight
											isScrolledTo={isScrolledTo}
											position={highlight.position}
											comment={highlight.comment}
										/>
									) : (
										<AreaHighlight
											isScrolledTo={isScrolledTo}
											highlight={highlight}
											onChange={(boundingRect) => {
												updateHighlight(
													highlight.id,
													{
														boundingRect:
															viewportToScaled(
																boundingRect,
															),
													},
													{
														image: screenshot(
															boundingRect,
														),
													},
												);
											}}
										/>
									);

									return (
										<Popup
											popupContent={
												<HighlightPopup
													{...highlight}
												/>
											}
											onMouseOver={(popupContent) =>
												setTip(
													highlight,
													(highlight) => popupContent,
												)
											}
											onMouseOut={hideTip}
											key={index}
										>
											{component}
										</Popup>
									);
								}}
								highlights={highlights}
							/>
						);
					}}
				</PdfLoader>
			</div>
		</div>
	);
};

export default Starter3Component;
