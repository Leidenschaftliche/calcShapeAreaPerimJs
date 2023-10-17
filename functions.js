const positiveNumberHandleErr = (...numbers) =>
  numbers.every((aNumber) => typeof aNumber === 'number' && aNumber >= 0);

const invalidValueStr = "Invalid Type Or Value";
const pNHE = positiveNumberHandleErr;
const calculateRectangleArea = (width, height) => pNHE(width, height) ? width * height : invalidValueStr;
const calculateRectanglePerimeter = (width, height) => pNHE(width, height) ? 2 * (width + height) : invalidValueStr;
const calculateSquareArea = sideLength => pNHE(sideLength) ? sideLength * sideLength : invalidValueStr;
const calculateSquarePerimeter = sideLength => pNHE(sideLength) ? 4 * sideLength : invalidValueStr;
const calculateCircleArea = sideLength => pNHE(sideLength) ? Math.PI * radius * radius : invalidValueStr;
const calculateCirclePerimeter = sideLength => pNHE(sideLength) ? 2 * Math.PI * radius : invalidValueStr;




