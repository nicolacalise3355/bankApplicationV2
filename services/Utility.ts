
/**
 * Not usefull, can use native js function
 * @param t 
 * @returns String with Date
 */
export const timestampToDate = (t: string) => {
    const dateObject = new Date(t);
    const ora = dateObject.toLocaleTimeString();
    const giorno = dateObject.getDate();
    const mese = dateObject.getMonth() + 1; 
    const anno = dateObject.getFullYear();
    return `${ora} - ${giorno}/${mese}/${anno}`;
}