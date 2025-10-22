/**
 * @description Use this function to count the number of words in a string with count strategy props
 * @param value - content want to count
 * @returns numbers of words in a string
 * @example
 *       <TextArea
 *          count={countWordsStrategy}
 *      />
 */
export const countWordsStrategy = (value: string): number => {
    const words = value.trim().split(/\s+/).filter(Boolean);
    return words.length;
};
