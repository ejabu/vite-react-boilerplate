export const add = (number1: number, number3: string) => {
  const value = {
    number1,
  };

  return {
    ...value,
    ...value,
  };
};

export const whatIsIt = () => {
  const value = {
    num1: 4,
  };

  return value;
};

function foo() {
  try {
    // Noncompliant: Promise rejection will not be caught

    Promise.reject(new Error('something bad happened')).catch(() =>
      console.log('a'),
    );
  } catch (error) {
    console.log('Failed to run promise', error);
  }
}

export const judge = async () => {
  const isOpen = true;
  const shouldShowModal = true;
  const items = [2, 3, 4];

  if (isOpen) {
    return shouldShowModal || items.length > 3;
  }

  return false;
};

enum DrawerState {
  Open,
  Close,
}

export interface Kocak {
  drawerState: DrawerState;
}

const whatIsIt2 = async () => {
  return Promise.resolve();
};

export async function simpleAsyncFunction() {
  await whatIsIt2();
}

export const simpleAsyncFunction2 = async () => {
  return whatIsIt2();
};

export async function simpleAsyncFunction3() {
  whatIsIt2();
}

export const simpleAsyncFunction4 = async () => {
  return await whatIsIt2();
};
