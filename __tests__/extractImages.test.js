import extractImages from "../src/extractImages";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fsp.readFile(getFixturePath(filename), 'utf-8');

test('extractImages handles empty HTML content', () => {
  const htmlContent = '';
  const extractedImages = extractImages(htmlContent);
  const expectedImages = [];
  expect(extractedImages).toEqual(expectedImages);
});

test('extractImages returns extracted image URLs', async () => {
  const htmlContent = await readFile('testPage.html');
  const extractedImages = extractImages(htmlContent);
  const expectedImages = ['nodejs.png'];
  expect(extractedImages).toEqual(expectedImages);
});