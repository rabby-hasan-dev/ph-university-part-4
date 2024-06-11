import { TErrorSources, TGenericErrorResponse } from "../interface/error";

const handleDuplicateError = (err: any): TGenericErrorResponse => {
    //  extract value will be in the first capturing group
    const match = err.message.match(/"([^"]*)"/);


    // the extacted value will be in the first capturing group

    const extructedMessage = match && match[1]

    const errorSources: TErrorSources = [{
        path: err.code,
        message: `${extructedMessage} is alredy exists!`
    }]


    const statusCode = 400;

    return {
        statusCode,
        message: "Duplicate input Error",
        errorSources
    }


}

export default handleDuplicateError;