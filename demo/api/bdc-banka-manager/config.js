// bdc-banka-manager config

module.exports = {
    getAllCardCardIdDetailV1: {
        url: '/v1/allCard/card/{id}/detail',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postAllCardItemAddV1: {
        url: '/v1/allCard/item/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putAllCardItemIdUpdateV1: {
        url: '/v1/allCard/item/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postAllCardSelectedCardListV1: {
        url: '/v1/allCard/selectedCard/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putAllCardShiftIdV1: {
        url: '/v1/allCard/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postAllCardUnSelectedCardListV1: {
        url: '/v1/allCard/unSelectedCard/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putAllCardUpdateFixedPositionFlagIdV1: {
        url: '/v1/allCard/updateFixedPositionFlag/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putAllCardUpdateStatusIdV1: {
        url: '/v1/allCard/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteAllCardIdDeleteV1: {
        url: '/v1/allCard/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getAuditSwitchActionInfoIdV1: {
        url: '/v1/audit/switch/action/info/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getAuditSwitchActionListV1: {
        url: '/v1/audit/switch/action/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postAuditSwitchActionUpdateV1: {
        url: '/v1/audit/switch/action/update',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getAuditSwitchContentInfoIdV1: {
        url: '/v1/audit/switch/content/info/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getAuditSwitchContentListV1: {
        url: '/v1/audit/switch/content/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postAuditSwitchContentUpdateV1: {
        url: '/v1/audit/switch/content/update',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getAuditSwitchEnumsV1: {
        url: '/v1/audit/switch/enums',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getAuditSwitchEnvInfoIdV1: {
        url: '/v1/audit/switch/env/info/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getAuditSwitchEnvListV1: {
        url: '/v1/audit/switch/env/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postAuditSwitchEnvUpdateV1: {
        url: '/v1/audit/switch/env/update',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postAwardConfigAddV1: {
        url: '/v1/awardConfig/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteAwardConfigDeleteIdV1: {
        url: '/v1/awardConfig/delete/{id}',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getAwardConfigListV1: {
        url: '/v1/awardConfig/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putAwardConfigUpdateIdV1: {
        url: '/v1/awardConfig/update/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postAwardRecordExportV1: {
        url: '/v1/awardRecord/export',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getAwardRecordListV1: {
        url: '/v1/awardRecord/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postAwardRecordUpdateV1: {
        url: '/v1/awardRecord/update',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getBankRepoListV1: {
        url: '/v1/bankRepo/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardActivityTemplateAddV1: {
        url: '/v1/card/activityTemplate/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardActivityTemplateCardShiftIdV1: {
        url: '/v1/card/activityTemplate/card/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardActivityTemplateCardUpdateStatusIdV1: {
        url: '/v1/card/activityTemplate/card/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteCardActivityTemplateCardIdDeleteV1: {
        url: '/v1/card/activityTemplate/card/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardActivityTemplateCardIdUpdateV1: {
        url: '/v1/card/activityTemplate/card/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardActivityTemplateCardsAddV1: {
        url: '/v1/card/activityTemplate/cards/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getCardActivityTemplateDetailIdV1: {
        url: '/v1/card/activityTemplate/detail/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardActivityTemplateListV1: {
        url: '/v1/card/activityTemplate/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardActivityTemplateSelectedCardsV1: {
        url: '/v1/card/activityTemplate/selected/cards',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardActivityTemplateShiftIdV1: {
        url: '/v1/card/activityTemplate/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardActivityTemplateUnSelectedCardsV1: {
        url: '/v1/card/activityTemplate/unSelected/cards',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardActivityTemplateUpdateStatusIdV1: {
        url: '/v1/card/activityTemplate/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteCardActivityTemplateIdDeleteV1: {
        url: '/v1/card/activityTemplate/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardActivityTemplateIdUpdateV1: {
        url: '/v1/card/activityTemplate/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardAdvertiseAddV1: {
        url: '/v1/card/advertise/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getCardAdvertiseDetailIdV1: {
        url: '/v1/card/advertise/detail/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardAdvertiseListV1: {
        url: '/v1/card/advertise/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardAdvertiseUpdateStatusIdV1: {
        url: '/v1/card/advertise/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteCardAdvertiseIdDeleteV1: {
        url: '/v1/card/advertise/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardAdvertiseIdUpdateV1: {
        url: '/v1/card/advertise/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getCardAttributeoptAttributesV1: {
        url: '/v1/card/attributeopt/attributes',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardAttributeoptListV1: {
        url: '/v1/card/attributeopt/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardAttributeoptUpdateV1: {
        url: '/v1/card/attributeopt/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardCardHotBankAddV1: {
        url: '/v1/card/cardHotBank/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteCardCardHotBankCardIdDeleteV1: {
        url: '/v1/card/cardHotBank/card/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardCardHotBankCardsAddV1: {
        url: '/v1/card/cardHotBank/cards/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getCardCardHotBankDetailIdV1: {
        url: '/v1/card/cardHotBank/detail/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardCardHotBankListV1: {
        url: '/v1/card/cardHotBank/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardCardHotBankSelectedCardsV1: {
        url: '/v1/card/cardHotBank/selected/cards',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardCardHotBankUnSelectedCardsV1: {
        url: '/v1/card/cardHotBank/unSelected/cards',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardCardHotBankUpdateStatusIdV1: {
        url: '/v1/card/cardHotBank/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteCardCardHotBankIdDeleteV1: {
        url: '/v1/card/cardHotBank/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardCardHotBankIdUpdateV1: {
        url: '/v1/card/cardHotBank/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardThemeAddV1: {
        url: '/v1/card/theme/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardThemeCardShiftIdV1: {
        url: '/v1/card/theme/card/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardThemeCardUpdateStatusIdV1: {
        url: '/v1/card/theme/card/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteCardThemeCardIdDeleteV1: {
        url: '/v1/card/theme/card/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardThemeCardIdUpdateV1: {
        url: '/v1/card/theme/card/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardThemeCardsAddV1: {
        url: '/v1/card/theme/cards/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getCardThemeDetailIdV1: {
        url: '/v1/card/theme/detail/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardThemeListV1: {
        url: '/v1/card/theme/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardThemeSelectedCardsV1: {
        url: '/v1/card/theme/selected/cards',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardThemeShiftIdV1: {
        url: '/v1/card/theme/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardThemeUnSelectedCardsV1: {
        url: '/v1/card/theme/unSelected/cards',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardThemeUpdateStatusIdV1: {
        url: '/v1/card/theme/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteCardThemeIdDeleteV1: {
        url: '/v1/card/theme/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardThemeIdUpdateV1: {
        url: '/v1/card/theme/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardConfigAddV1: {
        url: '/v1/cardConfig/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getCardConfigCardsV1: {
        url: '/v1/cardConfig/cards',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteCardConfigDeleteIdV1: {
        url: '/v1/cardConfig/delete/{id}',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getCardConfigListV1: {
        url: '/v1/cardConfig/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardConfigShiftIdV1: {
        url: '/v1/cardConfig/shift/{id}',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putCardConfigUpdateIdV1: {
        url: '/v1/cardConfig/update/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getCardRepoAllListV1: {
        url: '/v1/cardRepo/all/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getCardRepoAttrGetAttributeIdV1: {
        url: '/v1/cardRepo/attr/get/{attributeId}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getCardRepoAttrListV1: {
        url: '/v1/cardRepo/attr/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardRepoAttrSaveV1: {
        url: '/v1/cardRepo/attr/save',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardRepoCardunitsListV1: {
        url: '/v1/cardRepo/cardunits/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getCardRepoDeleteCardIdV1: {
        url: '/v1/cardRepo/delete/{cardId}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getCardRepoGetV1: {
        url: '/v1/cardRepo/get',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardRepoListV1: {
        url: '/v1/cardRepo/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postCardRepoSaveV1: {
        url: '/v1/cardRepo/save',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getCardRepoUpdateStatusV1: {
        url: '/v1/cardRepo/updateStatus',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postClosedCycleActiveConfigAddV1: {
        url: '/v1/closedCycle/activeConfig/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getClosedCycleActiveConfigBankListV1: {
        url: '/v1/closedCycle/activeConfig/bank/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getClosedCycleActiveConfigDetailIdV1: {
        url: '/v1/closedCycle/activeConfig/detail/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postClosedCycleActiveConfigListV1: {
        url: '/v1/closedCycle/activeConfig/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putClosedCycleActiveConfigIdUpdateV1: {
        url: '/v1/closedCycle/activeConfig/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postClosedCycleConfigAddV1: {
        url: '/v1/closedCycle/config/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getClosedCycleConfigBankListV1: {
        url: '/v1/closedCycle/config/bank/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getClosedCycleConfigDetailIdV1: {
        url: '/v1/closedCycle/config/detail/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postClosedCycleConfigListV1: {
        url: '/v1/closedCycle/config/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putClosedCycleConfigUpdateStatusIdV1: {
        url: '/v1/closedCycle/config/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putClosedCycleConfigIdUpdateV1: {
        url: '/v1/closedCycle/config/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnBannerItemAddV1: {
        url: '/v1/column/banner/item/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnBannerItemAdvertiseListV1: {
        url: '/v1/column/banner/item/advertise/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnBannerItemShiftIdV1: {
        url: '/v1/column/banner/item/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnBannerItemUpdateStatusIdV1: {
        url: '/v1/column/banner/item/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteColumnBannerItemIdDeleteV1: {
        url: '/v1/column/banner/item/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnBannerListV1: {
        url: '/v1/column/banner/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnBusinessItemAddV1: {
        url: '/v1/column/business/item/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getColumnBusinessItemDetailIdV1: {
        url: '/v1/column/business/item/detail/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnBusinessItemShiftIdV1: {
        url: '/v1/column/business/item/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnBusinessItemUpdateStatusIdV1: {
        url: '/v1/column/business/item/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteColumnBusinessItemIdDeleteV1: {
        url: '/v1/column/business/item/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnBusinessItemIdUpdateV1: {
        url: '/v1/column/business/item/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnBusinessListV1: {
        url: '/v1/column/business/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnCardHotBankCardResetrecommendIdV1: {
        url: '/v1/column/cardHotBank/card/resetrecommend/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnCardHotBankCardShiftIdV1: {
        url: '/v1/column/cardHotBank/card/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnCardHotBankCardUpdateStatusIdV1: {
        url: '/v1/column/cardHotBank/card/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getColumnCardHotBankCardIdDetailV1: {
        url: '/v1/column/cardHotBank/card/{id}/detail',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnCardHotBankCardIdUpdateV1: {
        url: '/v1/column/cardHotBank/card/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnCardHotBankCardsListV1: {
        url: '/v1/column/cardHotBank/cards/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getColumnCardHotBankHotBankListV1: {
        url: '/v1/column/cardHotBank/hotBank/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnCardHotBankItemAddV1: {
        url: '/v1/column/cardHotBank/item/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getColumnCardHotBankItemDetailIdV1: {
        url: '/v1/column/cardHotBank/item/detail/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnCardHotBankItemShiftIdV1: {
        url: '/v1/column/cardHotBank/item/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnCardHotBankItemUpdateFixedPositionFlagIdV1: {
        url: '/v1/column/cardHotBank/item/updateFixedPositionFlag/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnCardHotBankItemUpdateStatusIdV1: {
        url: '/v1/column/cardHotBank/item/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteColumnCardHotBankItemIdDeleteV1: {
        url: '/v1/column/cardHotBank/item/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnCardHotBankItemIdUpdateV1: {
        url: '/v1/column/cardHotBank/item/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnCardHotBankListV1: {
        url: '/v1/column/cardHotBank/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnConfigBannerDetailV1: {
        url: '/v1/column/config/banner/detail',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnConfigBusinessDetailV1: {
        url: '/v1/column/config/business/detail',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnConfigCardHotBankDetailV1: {
        url: '/v1/column/config/cardHotBank/detail',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnConfigHotCardDetailV1: {
        url: '/v1/column/config/hotCard/detail',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getColumnConfigListV1: {
        url: '/v1/column/config/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnConfigRecommendDetailV1: {
        url: '/v1/column/config/recommend/detail',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnConfigShiftIdV1: {
        url: '/v1/column/config/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnConfigThemeDetailV1: {
        url: '/v1/column/config/theme/detail',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnConfigUpdateIdV1: {
        url: '/v1/column/config/update/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnConfigUpdateStatusIdV1: {
        url: '/v1/column/config/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnConfigIdUpdateV1: {
        url: '/v1/column/config/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnHotCardCardsSelectedListV1: {
        url: '/v1/column/hotCard/cardsSelected/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnHotCardCardsUnSelectedListV1: {
        url: '/v1/column/hotCard/cardsUnSelected/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnHotCardItemAddV1: {
        url: '/v1/column/hotCard/item/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getColumnHotCardItemDetailIdV1: {
        url: '/v1/column/hotCard/item/detail/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnHotCardItemShiftIdV1: {
        url: '/v1/column/hotCard/item/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnHotCardItemUpdateFixedPositionFlagIdV1: {
        url: '/v1/column/hotCard/item/updateFixedPositionFlag/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnHotCardItemUpdateStatusIdV1: {
        url: '/v1/column/hotCard/item/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteColumnHotCardItemIdDeleteV1: {
        url: '/v1/column/hotCard/item/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnHotCardItemIdUpdateV1: {
        url: '/v1/column/hotCard/item/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnRecommendCardsListV1: {
        url: '/v1/column/recommend/cards/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnRecommendItemAddV1: {
        url: '/v1/column/recommend/item/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getColumnRecommendItemDetailIdV1: {
        url: '/v1/column/recommend/item/detail/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnRecommendItemListV1: {
        url: '/v1/column/recommend/item/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnRecommendItemShiftIdV1: {
        url: '/v1/column/recommend/item/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnRecommendItemUpdateFixedPositionFlagIdV1: {
        url: '/v1/column/recommend/item/updateFixedPositionFlag/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnRecommendItemUpdateStatusIdV1: {
        url: '/v1/column/recommend/item/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteColumnRecommendItemIdDeleteV1: {
        url: '/v1/column/recommend/item/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnRecommendItemIdUpdateV1: {
        url: '/v1/column/recommend/item/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getColumnThemeCardThemeListV1: {
        url: '/v1/column/theme/cardTheme/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnThemeItemAddV1: {
        url: '/v1/column/theme/item/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getColumnThemeItemDetailIdV1: {
        url: '/v1/column/theme/item/detail/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnThemeItemShiftIdV1: {
        url: '/v1/column/theme/item/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnThemeItemUpdateStatusIdV1: {
        url: '/v1/column/theme/item/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteColumnThemeItemIdDeleteV1: {
        url: '/v1/column/theme/item/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnThemeItemIdUpdateV1: {
        url: '/v1/column/theme/item/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnThemeListV1: {
        url: '/v1/column/theme/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postColumnVersionAddV1: {
        url: '/v1/column/version/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getColumnVersionListV1: {
        url: '/v1/column/version/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteColumnVersionVersionIdDeleteV1: {
        url: '/v1/column/version/{versionId}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putColumnVersionVersionIdUpdateV1: {
        url: '/v1/column/version/{versionId}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postLimittestConfigAddV1: {
        url: '/v1/limittest/config/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getLimittestConfigListV1: {
        url: '/v1/limittest/config/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteLimittestConfigIdDeleteV1: {
        url: '/v1/limittest/config/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getLimittestConfigIdDetailV1: {
        url: '/v1/limittest/config/{id}/detail',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putLimittestConfigIdUpdateV1: {
        url: '/v1/limittest/config/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getSearchConfigListV1: {
        url: '/v1/search/config/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putSearchConfigIdUpdateV1: {
        url: '/v1/search/config/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postShareConfigAddV1: {
        url: '/v1/shareConfig/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteShareConfigDeleteIdV1: {
        url: '/v1/shareConfig/delete/{id}',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getShareConfigListV1: {
        url: '/v1/shareConfig/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putShareConfigUpdateTermIdV1: {
        url: '/v1/shareConfig/update/{termId}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postSuccessPageCardItemAddV1: {
        url: '/v1/successPageCard/item/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postSuccessPageCardSelectedCardListV1: {
        url: '/v1/successPageCard/selectedCard/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putSuccessPageCardShiftIdV1: {
        url: '/v1/successPageCard/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postSuccessPageCardUnSelectedCardListV1: {
        url: '/v1/successPageCard/unSelectedCard/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putSuccessPageCardUpdateStatusIdV1: {
        url: '/v1/successPageCard/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteSuccessPageCardIdDeleteV1: {
        url: '/v1/successPageCard/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postTermAddV1: {
        url: '/v1/term/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getTermBankListV1: {
        url: '/v1/term/bank/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteTermDeleteIdV1: {
        url: '/v1/term/delete/{id}',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putTermEnableIdV1: {
        url: '/v1/term/enable/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getTermListV1: {
        url: '/v1/term/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getTermSimpleListV1: {
        url: '/v1/term/simple/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getTermTermIdV1: {
        url: '/v1/term/term/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putTermUpdateIdV1: {
        url: '/v1/term/update/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postToolTestV1: {
        url: '/v1/tool/test',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWiseConfigAddV1: {
        url: '/v1/wise/config/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getWiseConfigListV1: {
        url: '/v1/wise/config/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteWiseConfigIdDeleteV1: {
        url: '/v1/wise/config/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getWiseConfigIdDetailV1: {
        url: '/v1/wise/config/{id}/detail',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWiseConfigIdUpdateV1: {
        url: '/v1/wise/config/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnCardHotBankCardShiftIdV1: {
        url: '/v1/wxColumn/cardHotBank/card/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWxColumnCardHotBankCardsListV1: {
        url: '/v1/wxColumn/cardHotBank/cards/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getWxColumnCardHotBankHotBankListV1: {
        url: '/v1/wxColumn/cardHotBank/hotBank/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWxColumnCardHotBankItemAddV1: {
        url: '/v1/wxColumn/cardHotBank/item/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getWxColumnCardHotBankItemDetailIdV1: {
        url: '/v1/wxColumn/cardHotBank/item/detail/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnCardHotBankItemShiftIdV1: {
        url: '/v1/wxColumn/cardHotBank/item/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnCardHotBankItemUpdateStatusIdV1: {
        url: '/v1/wxColumn/cardHotBank/item/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteWxColumnCardHotBankItemIdDeleteV1: {
        url: '/v1/wxColumn/cardHotBank/item/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnCardHotBankItemIdUpdateV1: {
        url: '/v1/wxColumn/cardHotBank/item/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWxColumnCardHotBankListV1: {
        url: '/v1/wxColumn/cardHotBank/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWxColumnConfigCardHotBankDetailV1: {
        url: '/v1/wxColumn/config/cardHotBank/detail',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWxColumnConfigHotCardDetailV1: {
        url: '/v1/wxColumn/config/hotCard/detail',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getWxColumnConfigListV1: {
        url: '/v1/wxColumn/config/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWxColumnConfigRecommendDetailV1: {
        url: '/v1/wxColumn/config/recommend/detail',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnConfigShiftIdV1: {
        url: '/v1/wxColumn/config/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWxColumnConfigThemeDetailV1: {
        url: '/v1/wxColumn/config/theme/detail',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnConfigUpdateIdV1: {
        url: '/v1/wxColumn/config/update/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnConfigUpdateStatusIdV1: {
        url: '/v1/wxColumn/config/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnConfigIdUpdateV1: {
        url: '/v1/wxColumn/config/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWxColumnHotCardCardsSelectedListV1: {
        url: '/v1/wxColumn/hotCard/cardsSelected/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWxColumnHotCardCardsUnSelectedListV1: {
        url: '/v1/wxColumn/hotCard/cardsUnSelected/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWxColumnHotCardItemAddV1: {
        url: '/v1/wxColumn/hotCard/item/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getWxColumnHotCardItemDetailIdV1: {
        url: '/v1/wxColumn/hotCard/item/detail/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnHotCardItemShiftIdV1: {
        url: '/v1/wxColumn/hotCard/item/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnHotCardItemUpdateStatusIdV1: {
        url: '/v1/wxColumn/hotCard/item/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteWxColumnHotCardItemIdDeleteV1: {
        url: '/v1/wxColumn/hotCard/item/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnHotCardItemIdUpdateV1: {
        url: '/v1/wxColumn/hotCard/item/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWxColumnRecommendCardsListV1: {
        url: '/v1/wxColumn/recommend/cards/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWxColumnRecommendItemAddV1: {
        url: '/v1/wxColumn/recommend/item/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getWxColumnRecommendItemDetailIdV1: {
        url: '/v1/wxColumn/recommend/item/detail/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWxColumnRecommendItemListV1: {
        url: '/v1/wxColumn/recommend/item/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnRecommendItemShiftIdV1: {
        url: '/v1/wxColumn/recommend/item/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnRecommendItemUpdateStatusIdV1: {
        url: '/v1/wxColumn/recommend/item/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteWxColumnRecommendItemIdDeleteV1: {
        url: '/v1/wxColumn/recommend/item/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnRecommendItemIdUpdateV1: {
        url: '/v1/wxColumn/recommend/item/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getWxColumnThemeCardThemeListV1: {
        url: '/v1/wxColumn/theme/cardTheme/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWxColumnThemeItemAddV1: {
        url: '/v1/wxColumn/theme/item/add',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getWxColumnThemeItemDetailIdV1: {
        url: '/v1/wxColumn/theme/item/detail/{id}',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnThemeItemShiftIdV1: {
        url: '/v1/wxColumn/theme/item/shift/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnThemeItemUpdateStatusIdV1: {
        url: '/v1/wxColumn/theme/item/updateStatus/{id}',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    deleteWxColumnThemeItemIdDeleteV1: {
        url: '/v1/wxColumn/theme/item/{id}/delete',
        method: 'delete',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    putWxColumnThemeItemIdUpdateV1: {
        url: '/v1/wxColumn/theme/item/{id}/update',
        method: 'put',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postWxColumnThemeListV1: {
        url: '/v1/wxColumn/theme/list',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postChannelConfigCreateOrUpdateV2: {
        url: '/v2/channel/config/createOrUpdate',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    getChannelConfigListV2: {
        url: '/v2/channel/config/list',
        method: 'get',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
    postChannelConfigStatusV2: {
        url: '/v2/channel/config/status',
        method: 'post',
        baseURL: '/api.u51.com/bdc-banka-manager/api',
    },
};
