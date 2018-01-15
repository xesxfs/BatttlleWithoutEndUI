class ColorTransform {
	public constructor() {
	}
	public static colorMatrix = [
		1, 0, 0, 0, 0,
		1, 0, 0, 0, 0,
		1, 0, 0, 0, 0,
		0, 0, 0, 1, 0
	];
	public static colorTransform = new egret.ColorMatrixFilter(ColorTransform.colorMatrix);

	public static getColorTransform(r: number, g: number, b: number, a: number) {

		let matrix = ColorTransform.colorTransform.matrix;
		matrix[0] = r;
		matrix[6] = g;
		matrix[12] = b;
		matrix[18] = a;
		ColorTransform.colorTransform.matrix = matrix;
	}
}