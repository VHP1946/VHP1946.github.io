/**
 *  This setup serves as a template / guide on how to use descriptive commenting.
 * 
 *  1. Hover over the function to see how Intellisense displays certian pieces of info
 *  2. Take special note of how Paramaters, Returns and Variable Types are presented
 *  3. Compare the Intellisense display (what is shown), to the function's comment block (how to write the comment)
 * 
 *  Functions/Methods: Description is required; Parameter and Return definitions are required if they are used
 *  Variables: Type is required
 *  As a general rule: use as much of the below commenting functionality as possible to be as descripitve as possible
 */



functionName
/**
 * Single-sentence, simple explination of what the function is.
 * More in-depth descriptions or explinations can be 
 * added as more lines. Lines will automatically be combined 
 * in the comment.
 * 
 * Use this block as an example of what is possible when defining a function or method. 
 * 
 * ### Headings (# H1, ## H2, ### H3, etc.)
 *     inset notice
 * **bold text**    *italics*    ~~strike-through~~
 * 
 * @link [Google](https://google.com) - external link  [link display text](link address)
 * 
 * @param { * } ParamName1 description of what the parameter 1 is  (any Variable Type; should be rare)
 * @param { number[] } ParamName2 description of what the parameter 2 is  (an array of Variable Types)
 * @param { string | date } ParamName3 description of what the parameter 3 is  (either Variable Type 1 or 2)
 * @param { number | null } ParamName4 description of what the parameter 4 is  (either Variable Type or null object)
 * @param { string } [OptionalParam] description of what the optional parameter is
 * @param { number } [DefaultedParam=25] description of what the parameter with a default is
 * 
 * @param { object } ObjectName description of what the overall object represents
 * @param { object } ObjectName.prop1 description what property 1 is
 * @param { string } ObjectName.prop2 description what property 2 is
 * 
 * @returns { Promise <string> } 
 *     - description of what is returned; lay out structure when possible => { name: string, rank: number }[]
 *     - VScode will automatically try to report what the returning Variable Type will be if no type is provided
 *     - a promise function will state a Promise as a return with a Variable Type
 * 
 * @todo note that work needs to be done on the function
 * 
 * @stuff any "note marker" can be made and will show up independantly 
 */
function functionName(ParamName1, ParamName2, ParamName3, ParamName4, OptionalParam = 'test', DefaultedParam = 25, { prop1, prop2 }) {
    return new Promise((resolve, reject) => {

        return resolve(result)
    })
}



variableName
/**
 * Variables of any type can be commented on 
 * and utilize Intellisense
 * @type {{ 
 *      stringvar: string,
 *      boolvar: boolean,
 *      numvar: number,
 *      functionvar: function,
 *      arrayvar: array | string[],
 *      objvar: { prop1: string, prop2: object },
 *      undefinedvar: undefined,
 *      nullvar: null,
 *      dateobj: Date 
 * }}  Object properties can be written nested
 */
var variableName = {
    stringvar: 'test',
    boolvar: true,
    numvar: 10,
    functionvar: functionName,
    arrayvar: [1, 2, 3, 4],
    objvar: { prop1: 'test1', prop2: 'test2' },
    undefinedvar: undefined,
    nullvar: null,
    dateobj: new Date()
}



teststring
/** @type { string } Can be single-line if need-be */           // useful for short-term variables
var teststring = 'test';




REQUIREDfunction
/**
 * This is what is required when defining a function or method
 * @param { string } param1 Ensure correct Variable Type is declared (if parameters are used)
 * @returns Ensure correct Variable Type is declared or calculated (if return is used)
 */
function REQUIREDfunction(param1) {
    return result;
}


REQUIREDcomplexVariable
/**
 * This is what is required when defining a complex variable
 * @type {{ 
 *      stringProp: string,
 *      boolProp: boolean,
 *      numProp: number,
 *      method: function,
 *      arrayProp: array | string[],
 *      nestedObj: { prop1: string, prop2: object },
 *      dateProp: Date 
 * }}  
 */
var REQUIREDcomplexVariable = {
    stringvar: 'test',
    boolvar: true,
    numvar: 10,
    functionvar: functionName,
    arrayvar: [1, 2, 3, 4],
    objvar: { prop1: 'test1', prop2: 'test2' },
    undefinedvar: undefined,
    nullvar: null,
    dateobj: new Date()
}