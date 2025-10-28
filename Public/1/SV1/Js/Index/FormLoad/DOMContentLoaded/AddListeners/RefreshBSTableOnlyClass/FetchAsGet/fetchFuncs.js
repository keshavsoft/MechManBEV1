import getUrlJson from './getUrl.json' with {type: 'json'};
import CommonConfigJson from '../../../../../../../Config.json' with {type: 'json'};
const CommonSubTableName = "1_BillItemsTable";

let StartFunc = async () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "pk" });

    let jVarLocalCommonTable = CommonConfigJson.StartUrl;
    let jVarLocalGetEndPoint = getUrlJson.GetEndPoint.replace("{inValue}", jVarLocalFilterString);
    let jVarLocalFetchUrl = `${jVarLocalCommonTable}/${CommonSubTableName}/${jVarLocalGetEndPoint}`

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };

