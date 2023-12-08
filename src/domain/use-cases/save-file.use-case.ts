import fs from 'fs';

export interface SaveFileUSeCase {
    execute: ( options: Options ) => boolean;
}

export interface Options {
    fileContent     : string;
    fileDestination?: string;
    fileName?       : string;
}

export class SaveFile implements SaveFileUSeCase{

    constructor(
        /** repository: storageRepository */
    ){}

    execute( {  
        fileContent, 
        fileDestination = 'outputs', 
        fileName = 'table'
    } : Options): boolean {
        try {
            fs.mkdirSync(fileDestination, { recursive: true });
            fs.writeFileSync(`${ fileDestination }/${ fileName }.txt`, fileContent );
            return true;                
        } catch (error) {
            //console.error(error); // winston  
            return false;
        }
    }
}