/**
 * Represents a 2D vector with x and y components.
 * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin
 */
declare interface Vector2DMixin {
  /**
   * The x component of the vector.
   */
  x?: number;

  /**
   * The y component of the vector.
   */
  y?: number;

  /**
   * Determines whether this vector is equal to another vector.
   * @param otherVector - The vector to compare to.
   * @returns True if the vectors are equal, false otherwise.
   * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin:IsEqualTo
   */
  IsEqualTo(otherVector: Vector2DMixin): boolean;

  /**
   * Gets the x and y components of the vector.
   * @returns A tuple containing the x and y components of the vector.
   * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin:GetXY
   */
  GetXY(): LuaMultiReturn<[number, number]>;

  /**
   * Sets the x and y components of the vector.
   * @param x - The new x component of the vector.
   * @param y - The new y component of the vector.
   * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin:SetXY
   */
  SetXY(x: number, y: number): void;

  /**
   * Scales the vector by a scalar value.
   * @param scalar - The scalar value to scale the vector by.
   * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin:ScaleBy
   */
  ScaleBy(scalar: number): void;

  /**
   * Divides the vector by a scalar value.
   * @param scalar - The scalar value to divide the vector by.
   * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin:DivideBy
   */
  DivideBy(scalar: number): void;

  /**
   * Adds another vector to this vector.
   * @param other - The vector to add to this vector.
   * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin:Add
   */
  Add(other: Vector2DMixin): void;

  /**
   * Subtracts another vector from this vector.
   * @param other - The vector to subtract from this vector.
   * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin:Subtract
   */
  Subtract(other: Vector2DMixin): void;

  /**
   * Calculates the cross product of this vector and another vector.
   * @param other - The vector to calculate the cross product with.
   * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin:Cross
   */
  Cross(other: Vector2DMixin): void;

  /**
   * Calculates the dot product of this vector and another vector.
   * @param other - The vector to calculate the dot product with.
   * @returns The dot product of the two vectors.
   * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin:Dot
   */
  Dot(other: Vector2DMixin): number;

  /**
   * Determines whether this vector is a zero vector.
   * @returns True if the vector is a zero vector, false otherwise.
   * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin:IsZero
   */
  IsZero(): boolean;

  /**
   * Calculates the squared length of the vector.
   * @returns The squared length of the vector.
   * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin:GetLengthSquared
   */
  GetLengthSquared(): number;

  /**
   * Calculates the length of the vector.
   * @returns The length of the vector.
   * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin:GetLength
   */
  GetLength(): number;

  /**
   * Normalizes the vector to have a length of 1.
   * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin:Normalize
   */
  Normalize(): void;

  /**
   * Rotates the vector by a given angle.
   * @param rotationRadians - The angle to rotate the vector by, in radians.
   * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin:RotateDirection
   */
  RotateDirection(rotationRadians: number): void;

  /**
   * Creates a copy of the vector.
   * @returns A new vector with the same x and y components as this vector.
   * @see https://www.townlong-yak.com/framexml/go/Vector2DMixin:Clone
   */
  Clone(): Vector2DMixin;
}

/**
 * Creates a new 2D vector with the given x and y components.
 * @param x - The x component of the vector.
 * @param y - The y component of the vector.
 * @returns A new vector with the given x and y components.
 * @see https://www.townlong-yak.com/framexml/go/CreateVector2D
 */
declare function CreateVector2D(x: number, y: number): Vector2DMixin;

/**
 * Determines whether two vectors are equal.
 * @param left - The first vector to compare.
 * @param right - The second vector to compare.
 * @returns True if the vectors are equal, false otherwise.
 * @see https://www.townlong-yak.com/framexml/go/AreVector2DEqual
 */
declare function AreVector2DEqual(
  left: Vector2DMixin,
  right: Vector2DMixin
): boolean;
