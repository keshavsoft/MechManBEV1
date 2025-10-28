import ConfigJson from '../../../../../../Config.json' with {type: 'json'};
import CommonTableConfig from '../../../../tableConfig.json' with {type: 'json'};
const CommonSubTableName = CommonTableConfig.SubTableName;

let StartFunc = async () => {
    const jVarLocalStartUrl = ConfigJson.StartUrl;
    let jVarLocalFetchUrl = `${jVarLocalStartUrl}/${CommonSubTableName}/Read/SingleColumn/ItemName`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

