/**
 * Id: 733
 * Name: Flood Fill
 * Link: https://leetcode.com/problems/flood-fill/
 */

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  if (image[sr][sc] === color) return image;

  const fill = (
    image: number[][],
    sr: number,
    sc: number,
    color: number,
    newColor: number
  ) => {
    if (
      sr < 0 ||
      sc < 0 ||
      sr >= image.length ||
      sc >= image[0].length ||
      image[sr][sc] !== color
    )
      return;

    image[sr][sc] = newColor;

    fill(image, sr - 1, sc, color, newColor);
    fill(image, sr + 1, sc, color, newColor);
    fill(image, sr, sc - 1, color, newColor);
    fill(image, sr, sc + 1, color, newColor);
  };

  fill(image, sr, sc, image[sr][sc], color);

  return image;
}
