const axios = require('../axios');
const config = require('./config');

module.exports = {
    getAllCardCardIdDetailV1: param => axios(Object.assign(config.getAllCardCardIdDetailV1, param)),
    postAllCardItemAddV1: param => axios(Object.assign(config.postAllCardItemAddV1, param)),
    putAllCardItemIdUpdateV1: param => axios(Object.assign(config.putAllCardItemIdUpdateV1, param)),
    postAllCardSelectedCardListV1: param => axios(Object.assign(config.postAllCardSelectedCardListV1, param)),
    putAllCardShiftIdV1: param => axios(Object.assign(config.putAllCardShiftIdV1, param)),
    postAllCardUnSelectedCardListV1: param => axios(Object.assign(config.postAllCardUnSelectedCardListV1, param)),
    putAllCardUpdateFixedPositionFlagIdV1: param => axios(Object.assign(config.putAllCardUpdateFixedPositionFlagIdV1, param)),
    putAllCardUpdateStatusIdV1: param => axios(Object.assign(config.putAllCardUpdateStatusIdV1, param)),
    deleteAllCardIdDeleteV1: param => axios(Object.assign(config.deleteAllCardIdDeleteV1, param)),
    getAuditSwitchActionInfoIdV1: param => axios(Object.assign(config.getAuditSwitchActionInfoIdV1, param)),
    getAuditSwitchActionListV1: param => axios(Object.assign(config.getAuditSwitchActionListV1, param)),
    postAuditSwitchActionUpdateV1: param => axios(Object.assign(config.postAuditSwitchActionUpdateV1, param)),
    getAuditSwitchContentInfoIdV1: param => axios(Object.assign(config.getAuditSwitchContentInfoIdV1, param)),
    getAuditSwitchContentListV1: param => axios(Object.assign(config.getAuditSwitchContentListV1, param)),
    postAuditSwitchContentUpdateV1: param => axios(Object.assign(config.postAuditSwitchContentUpdateV1, param)),
    getAuditSwitchEnumsV1: param => axios(Object.assign(config.getAuditSwitchEnumsV1, param)),
    getAuditSwitchEnvInfoIdV1: param => axios(Object.assign(config.getAuditSwitchEnvInfoIdV1, param)),
    getAuditSwitchEnvListV1: param => axios(Object.assign(config.getAuditSwitchEnvListV1, param)),
    postAuditSwitchEnvUpdateV1: param => axios(Object.assign(config.postAuditSwitchEnvUpdateV1, param)),
    postAwardConfigAddV1: param => axios(Object.assign(config.postAwardConfigAddV1, param)),
    deleteAwardConfigDeleteIdV1: param => axios(Object.assign(config.deleteAwardConfigDeleteIdV1, param)),
    getAwardConfigListV1: param => axios(Object.assign(config.getAwardConfigListV1, param)),
    putAwardConfigUpdateIdV1: param => axios(Object.assign(config.putAwardConfigUpdateIdV1, param)),
    postAwardRecordExportV1: param => axios(Object.assign(config.postAwardRecordExportV1, param)),
    getAwardRecordListV1: param => axios(Object.assign(config.getAwardRecordListV1, param)),
    postAwardRecordUpdateV1: param => axios(Object.assign(config.postAwardRecordUpdateV1, param)),
    getBankRepoListV1: param => axios(Object.assign(config.getBankRepoListV1, param)),
    postCardActivityTemplateAddV1: param => axios(Object.assign(config.postCardActivityTemplateAddV1, param)),
    putCardActivityTemplateCardShiftIdV1: param => axios(Object.assign(config.putCardActivityTemplateCardShiftIdV1, param)),
    putCardActivityTemplateCardUpdateStatusIdV1: param => axios(Object.assign(config.putCardActivityTemplateCardUpdateStatusIdV1, param)),
    deleteCardActivityTemplateCardIdDeleteV1: param => axios(Object.assign(config.deleteCardActivityTemplateCardIdDeleteV1, param)),
    putCardActivityTemplateCardIdUpdateV1: param => axios(Object.assign(config.putCardActivityTemplateCardIdUpdateV1, param)),
    postCardActivityTemplateCardsAddV1: param => axios(Object.assign(config.postCardActivityTemplateCardsAddV1, param)),
    getCardActivityTemplateDetailIdV1: param => axios(Object.assign(config.getCardActivityTemplateDetailIdV1, param)),
    postCardActivityTemplateListV1: param => axios(Object.assign(config.postCardActivityTemplateListV1, param)),
    postCardActivityTemplateSelectedCardsV1: param => axios(Object.assign(config.postCardActivityTemplateSelectedCardsV1, param)),
    putCardActivityTemplateShiftIdV1: param => axios(Object.assign(config.putCardActivityTemplateShiftIdV1, param)),
    postCardActivityTemplateUnSelectedCardsV1: param => axios(Object.assign(config.postCardActivityTemplateUnSelectedCardsV1, param)),
    putCardActivityTemplateUpdateStatusIdV1: param => axios(Object.assign(config.putCardActivityTemplateUpdateStatusIdV1, param)),
    deleteCardActivityTemplateIdDeleteV1: param => axios(Object.assign(config.deleteCardActivityTemplateIdDeleteV1, param)),
    putCardActivityTemplateIdUpdateV1: param => axios(Object.assign(config.putCardActivityTemplateIdUpdateV1, param)),
    postCardAdvertiseAddV1: param => axios(Object.assign(config.postCardAdvertiseAddV1, param)),
    getCardAdvertiseDetailIdV1: param => axios(Object.assign(config.getCardAdvertiseDetailIdV1, param)),
    postCardAdvertiseListV1: param => axios(Object.assign(config.postCardAdvertiseListV1, param)),
    putCardAdvertiseUpdateStatusIdV1: param => axios(Object.assign(config.putCardAdvertiseUpdateStatusIdV1, param)),
    deleteCardAdvertiseIdDeleteV1: param => axios(Object.assign(config.deleteCardAdvertiseIdDeleteV1, param)),
    putCardAdvertiseIdUpdateV1: param => axios(Object.assign(config.putCardAdvertiseIdUpdateV1, param)),
    getCardAttributeoptAttributesV1: param => axios(Object.assign(config.getCardAttributeoptAttributesV1, param)),
    postCardAttributeoptListV1: param => axios(Object.assign(config.postCardAttributeoptListV1, param)),
    putCardAttributeoptUpdateV1: param => axios(Object.assign(config.putCardAttributeoptUpdateV1, param)),
    postCardCardHotBankAddV1: param => axios(Object.assign(config.postCardCardHotBankAddV1, param)),
    deleteCardCardHotBankCardIdDeleteV1: param => axios(Object.assign(config.deleteCardCardHotBankCardIdDeleteV1, param)),
    postCardCardHotBankCardsAddV1: param => axios(Object.assign(config.postCardCardHotBankCardsAddV1, param)),
    getCardCardHotBankDetailIdV1: param => axios(Object.assign(config.getCardCardHotBankDetailIdV1, param)),
    postCardCardHotBankListV1: param => axios(Object.assign(config.postCardCardHotBankListV1, param)),
    postCardCardHotBankSelectedCardsV1: param => axios(Object.assign(config.postCardCardHotBankSelectedCardsV1, param)),
    postCardCardHotBankUnSelectedCardsV1: param => axios(Object.assign(config.postCardCardHotBankUnSelectedCardsV1, param)),
    putCardCardHotBankUpdateStatusIdV1: param => axios(Object.assign(config.putCardCardHotBankUpdateStatusIdV1, param)),
    deleteCardCardHotBankIdDeleteV1: param => axios(Object.assign(config.deleteCardCardHotBankIdDeleteV1, param)),
    putCardCardHotBankIdUpdateV1: param => axios(Object.assign(config.putCardCardHotBankIdUpdateV1, param)),
    postCardThemeAddV1: param => axios(Object.assign(config.postCardThemeAddV1, param)),
    putCardThemeCardShiftIdV1: param => axios(Object.assign(config.putCardThemeCardShiftIdV1, param)),
    putCardThemeCardUpdateStatusIdV1: param => axios(Object.assign(config.putCardThemeCardUpdateStatusIdV1, param)),
    deleteCardThemeCardIdDeleteV1: param => axios(Object.assign(config.deleteCardThemeCardIdDeleteV1, param)),
    putCardThemeCardIdUpdateV1: param => axios(Object.assign(config.putCardThemeCardIdUpdateV1, param)),
    postCardThemeCardsAddV1: param => axios(Object.assign(config.postCardThemeCardsAddV1, param)),
    getCardThemeDetailIdV1: param => axios(Object.assign(config.getCardThemeDetailIdV1, param)),
    postCardThemeListV1: param => axios(Object.assign(config.postCardThemeListV1, param)),
    postCardThemeSelectedCardsV1: param => axios(Object.assign(config.postCardThemeSelectedCardsV1, param)),
    putCardThemeShiftIdV1: param => axios(Object.assign(config.putCardThemeShiftIdV1, param)),
    postCardThemeUnSelectedCardsV1: param => axios(Object.assign(config.postCardThemeUnSelectedCardsV1, param)),
    putCardThemeUpdateStatusIdV1: param => axios(Object.assign(config.putCardThemeUpdateStatusIdV1, param)),
    deleteCardThemeIdDeleteV1: param => axios(Object.assign(config.deleteCardThemeIdDeleteV1, param)),
    putCardThemeIdUpdateV1: param => axios(Object.assign(config.putCardThemeIdUpdateV1, param)),
    postCardConfigAddV1: param => axios(Object.assign(config.postCardConfigAddV1, param)),
    getCardConfigCardsV1: param => axios(Object.assign(config.getCardConfigCardsV1, param)),
    deleteCardConfigDeleteIdV1: param => axios(Object.assign(config.deleteCardConfigDeleteIdV1, param)),
    getCardConfigListV1: param => axios(Object.assign(config.getCardConfigListV1, param)),
    postCardConfigShiftIdV1: param => axios(Object.assign(config.postCardConfigShiftIdV1, param)),
    putCardConfigUpdateIdV1: param => axios(Object.assign(config.putCardConfigUpdateIdV1, param)),
    getCardRepoAllListV1: param => axios(Object.assign(config.getCardRepoAllListV1, param)),
    getCardRepoAttrGetAttributeIdV1: param => axios(Object.assign(config.getCardRepoAttrGetAttributeIdV1, param)),
    getCardRepoAttrListV1: param => axios(Object.assign(config.getCardRepoAttrListV1, param)),
    postCardRepoAttrSaveV1: param => axios(Object.assign(config.postCardRepoAttrSaveV1, param)),
    postCardRepoCardunitsListV1: param => axios(Object.assign(config.postCardRepoCardunitsListV1, param)),
    getCardRepoDeleteCardIdV1: param => axios(Object.assign(config.getCardRepoDeleteCardIdV1, param)),
    getCardRepoGetV1: param => axios(Object.assign(config.getCardRepoGetV1, param)),
    postCardRepoListV1: param => axios(Object.assign(config.postCardRepoListV1, param)),
    postCardRepoSaveV1: param => axios(Object.assign(config.postCardRepoSaveV1, param)),
    getCardRepoUpdateStatusV1: param => axios(Object.assign(config.getCardRepoUpdateStatusV1, param)),
    postClosedCycleActiveConfigAddV1: param => axios(Object.assign(config.postClosedCycleActiveConfigAddV1, param)),
    getClosedCycleActiveConfigBankListV1: param => axios(Object.assign(config.getClosedCycleActiveConfigBankListV1, param)),
    getClosedCycleActiveConfigDetailIdV1: param => axios(Object.assign(config.getClosedCycleActiveConfigDetailIdV1, param)),
    postClosedCycleActiveConfigListV1: param => axios(Object.assign(config.postClosedCycleActiveConfigListV1, param)),
    putClosedCycleActiveConfigIdUpdateV1: param => axios(Object.assign(config.putClosedCycleActiveConfigIdUpdateV1, param)),
    postClosedCycleConfigAddV1: param => axios(Object.assign(config.postClosedCycleConfigAddV1, param)),
    getClosedCycleConfigBankListV1: param => axios(Object.assign(config.getClosedCycleConfigBankListV1, param)),
    getClosedCycleConfigDetailIdV1: param => axios(Object.assign(config.getClosedCycleConfigDetailIdV1, param)),
    postClosedCycleConfigListV1: param => axios(Object.assign(config.postClosedCycleConfigListV1, param)),
    putClosedCycleConfigUpdateStatusIdV1: param => axios(Object.assign(config.putClosedCycleConfigUpdateStatusIdV1, param)),
    putClosedCycleConfigIdUpdateV1: param => axios(Object.assign(config.putClosedCycleConfigIdUpdateV1, param)),
    postColumnBannerItemAddV1: param => axios(Object.assign(config.postColumnBannerItemAddV1, param)),
    postColumnBannerItemAdvertiseListV1: param => axios(Object.assign(config.postColumnBannerItemAdvertiseListV1, param)),
    putColumnBannerItemShiftIdV1: param => axios(Object.assign(config.putColumnBannerItemShiftIdV1, param)),
    putColumnBannerItemUpdateStatusIdV1: param => axios(Object.assign(config.putColumnBannerItemUpdateStatusIdV1, param)),
    deleteColumnBannerItemIdDeleteV1: param => axios(Object.assign(config.deleteColumnBannerItemIdDeleteV1, param)),
    postColumnBannerListV1: param => axios(Object.assign(config.postColumnBannerListV1, param)),
    postColumnBusinessItemAddV1: param => axios(Object.assign(config.postColumnBusinessItemAddV1, param)),
    getColumnBusinessItemDetailIdV1: param => axios(Object.assign(config.getColumnBusinessItemDetailIdV1, param)),
    putColumnBusinessItemShiftIdV1: param => axios(Object.assign(config.putColumnBusinessItemShiftIdV1, param)),
    putColumnBusinessItemUpdateStatusIdV1: param => axios(Object.assign(config.putColumnBusinessItemUpdateStatusIdV1, param)),
    deleteColumnBusinessItemIdDeleteV1: param => axios(Object.assign(config.deleteColumnBusinessItemIdDeleteV1, param)),
    putColumnBusinessItemIdUpdateV1: param => axios(Object.assign(config.putColumnBusinessItemIdUpdateV1, param)),
    postColumnBusinessListV1: param => axios(Object.assign(config.postColumnBusinessListV1, param)),
    putColumnCardHotBankCardResetrecommendIdV1: param => axios(Object.assign(config.putColumnCardHotBankCardResetrecommendIdV1, param)),
    putColumnCardHotBankCardShiftIdV1: param => axios(Object.assign(config.putColumnCardHotBankCardShiftIdV1, param)),
    putColumnCardHotBankCardUpdateStatusIdV1: param => axios(Object.assign(config.putColumnCardHotBankCardUpdateStatusIdV1, param)),
    getColumnCardHotBankCardIdDetailV1: param => axios(Object.assign(config.getColumnCardHotBankCardIdDetailV1, param)),
    putColumnCardHotBankCardIdUpdateV1: param => axios(Object.assign(config.putColumnCardHotBankCardIdUpdateV1, param)),
    postColumnCardHotBankCardsListV1: param => axios(Object.assign(config.postColumnCardHotBankCardsListV1, param)),
    getColumnCardHotBankHotBankListV1: param => axios(Object.assign(config.getColumnCardHotBankHotBankListV1, param)),
    postColumnCardHotBankItemAddV1: param => axios(Object.assign(config.postColumnCardHotBankItemAddV1, param)),
    getColumnCardHotBankItemDetailIdV1: param => axios(Object.assign(config.getColumnCardHotBankItemDetailIdV1, param)),
    putColumnCardHotBankItemShiftIdV1: param => axios(Object.assign(config.putColumnCardHotBankItemShiftIdV1, param)),
    putColumnCardHotBankItemUpdateFixedPositionFlagIdV1: param => axios(Object.assign(config.putColumnCardHotBankItemUpdateFixedPositionFlagIdV1, param)),
    putColumnCardHotBankItemUpdateStatusIdV1: param => axios(Object.assign(config.putColumnCardHotBankItemUpdateStatusIdV1, param)),
    deleteColumnCardHotBankItemIdDeleteV1: param => axios(Object.assign(config.deleteColumnCardHotBankItemIdDeleteV1, param)),
    putColumnCardHotBankItemIdUpdateV1: param => axios(Object.assign(config.putColumnCardHotBankItemIdUpdateV1, param)),
    postColumnCardHotBankListV1: param => axios(Object.assign(config.postColumnCardHotBankListV1, param)),
    postColumnConfigBannerDetailV1: param => axios(Object.assign(config.postColumnConfigBannerDetailV1, param)),
    postColumnConfigBusinessDetailV1: param => axios(Object.assign(config.postColumnConfigBusinessDetailV1, param)),
    postColumnConfigCardHotBankDetailV1: param => axios(Object.assign(config.postColumnConfigCardHotBankDetailV1, param)),
    postColumnConfigHotCardDetailV1: param => axios(Object.assign(config.postColumnConfigHotCardDetailV1, param)),
    getColumnConfigListV1: param => axios(Object.assign(config.getColumnConfigListV1, param)),
    postColumnConfigRecommendDetailV1: param => axios(Object.assign(config.postColumnConfigRecommendDetailV1, param)),
    putColumnConfigShiftIdV1: param => axios(Object.assign(config.putColumnConfigShiftIdV1, param)),
    postColumnConfigThemeDetailV1: param => axios(Object.assign(config.postColumnConfigThemeDetailV1, param)),
    putColumnConfigUpdateIdV1: param => axios(Object.assign(config.putColumnConfigUpdateIdV1, param)),
    putColumnConfigUpdateStatusIdV1: param => axios(Object.assign(config.putColumnConfigUpdateStatusIdV1, param)),
    putColumnConfigIdUpdateV1: param => axios(Object.assign(config.putColumnConfigIdUpdateV1, param)),
    postColumnHotCardCardsSelectedListV1: param => axios(Object.assign(config.postColumnHotCardCardsSelectedListV1, param)),
    postColumnHotCardCardsUnSelectedListV1: param => axios(Object.assign(config.postColumnHotCardCardsUnSelectedListV1, param)),
    postColumnHotCardItemAddV1: param => axios(Object.assign(config.postColumnHotCardItemAddV1, param)),
    getColumnHotCardItemDetailIdV1: param => axios(Object.assign(config.getColumnHotCardItemDetailIdV1, param)),
    putColumnHotCardItemShiftIdV1: param => axios(Object.assign(config.putColumnHotCardItemShiftIdV1, param)),
    putColumnHotCardItemUpdateFixedPositionFlagIdV1: param => axios(Object.assign(config.putColumnHotCardItemUpdateFixedPositionFlagIdV1, param)),
    putColumnHotCardItemUpdateStatusIdV1: param => axios(Object.assign(config.putColumnHotCardItemUpdateStatusIdV1, param)),
    deleteColumnHotCardItemIdDeleteV1: param => axios(Object.assign(config.deleteColumnHotCardItemIdDeleteV1, param)),
    putColumnHotCardItemIdUpdateV1: param => axios(Object.assign(config.putColumnHotCardItemIdUpdateV1, param)),
    postColumnRecommendCardsListV1: param => axios(Object.assign(config.postColumnRecommendCardsListV1, param)),
    postColumnRecommendItemAddV1: param => axios(Object.assign(config.postColumnRecommendItemAddV1, param)),
    getColumnRecommendItemDetailIdV1: param => axios(Object.assign(config.getColumnRecommendItemDetailIdV1, param)),
    postColumnRecommendItemListV1: param => axios(Object.assign(config.postColumnRecommendItemListV1, param)),
    putColumnRecommendItemShiftIdV1: param => axios(Object.assign(config.putColumnRecommendItemShiftIdV1, param)),
    putColumnRecommendItemUpdateFixedPositionFlagIdV1: param => axios(Object.assign(config.putColumnRecommendItemUpdateFixedPositionFlagIdV1, param)),
    putColumnRecommendItemUpdateStatusIdV1: param => axios(Object.assign(config.putColumnRecommendItemUpdateStatusIdV1, param)),
    deleteColumnRecommendItemIdDeleteV1: param => axios(Object.assign(config.deleteColumnRecommendItemIdDeleteV1, param)),
    putColumnRecommendItemIdUpdateV1: param => axios(Object.assign(config.putColumnRecommendItemIdUpdateV1, param)),
    getColumnThemeCardThemeListV1: param => axios(Object.assign(config.getColumnThemeCardThemeListV1, param)),
    postColumnThemeItemAddV1: param => axios(Object.assign(config.postColumnThemeItemAddV1, param)),
    getColumnThemeItemDetailIdV1: param => axios(Object.assign(config.getColumnThemeItemDetailIdV1, param)),
    putColumnThemeItemShiftIdV1: param => axios(Object.assign(config.putColumnThemeItemShiftIdV1, param)),
    putColumnThemeItemUpdateStatusIdV1: param => axios(Object.assign(config.putColumnThemeItemUpdateStatusIdV1, param)),
    deleteColumnThemeItemIdDeleteV1: param => axios(Object.assign(config.deleteColumnThemeItemIdDeleteV1, param)),
    putColumnThemeItemIdUpdateV1: param => axios(Object.assign(config.putColumnThemeItemIdUpdateV1, param)),
    postColumnThemeListV1: param => axios(Object.assign(config.postColumnThemeListV1, param)),
    postColumnVersionAddV1: param => axios(Object.assign(config.postColumnVersionAddV1, param)),
    getColumnVersionListV1: param => axios(Object.assign(config.getColumnVersionListV1, param)),
    deleteColumnVersionVersionIdDeleteV1: param => axios(Object.assign(config.deleteColumnVersionVersionIdDeleteV1, param)),
    putColumnVersionVersionIdUpdateV1: param => axios(Object.assign(config.putColumnVersionVersionIdUpdateV1, param)),
    postLimittestConfigAddV1: param => axios(Object.assign(config.postLimittestConfigAddV1, param)),
    getLimittestConfigListV1: param => axios(Object.assign(config.getLimittestConfigListV1, param)),
    deleteLimittestConfigIdDeleteV1: param => axios(Object.assign(config.deleteLimittestConfigIdDeleteV1, param)),
    getLimittestConfigIdDetailV1: param => axios(Object.assign(config.getLimittestConfigIdDetailV1, param)),
    putLimittestConfigIdUpdateV1: param => axios(Object.assign(config.putLimittestConfigIdUpdateV1, param)),
    getSearchConfigListV1: param => axios(Object.assign(config.getSearchConfigListV1, param)),
    putSearchConfigIdUpdateV1: param => axios(Object.assign(config.putSearchConfigIdUpdateV1, param)),
    postShareConfigAddV1: param => axios(Object.assign(config.postShareConfigAddV1, param)),
    deleteShareConfigDeleteIdV1: param => axios(Object.assign(config.deleteShareConfigDeleteIdV1, param)),
    getShareConfigListV1: param => axios(Object.assign(config.getShareConfigListV1, param)),
    putShareConfigUpdateTermIdV1: param => axios(Object.assign(config.putShareConfigUpdateTermIdV1, param)),
    postSuccessPageCardItemAddV1: param => axios(Object.assign(config.postSuccessPageCardItemAddV1, param)),
    postSuccessPageCardSelectedCardListV1: param => axios(Object.assign(config.postSuccessPageCardSelectedCardListV1, param)),
    putSuccessPageCardShiftIdV1: param => axios(Object.assign(config.putSuccessPageCardShiftIdV1, param)),
    postSuccessPageCardUnSelectedCardListV1: param => axios(Object.assign(config.postSuccessPageCardUnSelectedCardListV1, param)),
    putSuccessPageCardUpdateStatusIdV1: param => axios(Object.assign(config.putSuccessPageCardUpdateStatusIdV1, param)),
    deleteSuccessPageCardIdDeleteV1: param => axios(Object.assign(config.deleteSuccessPageCardIdDeleteV1, param)),
    postTermAddV1: param => axios(Object.assign(config.postTermAddV1, param)),
    getTermBankListV1: param => axios(Object.assign(config.getTermBankListV1, param)),
    deleteTermDeleteIdV1: param => axios(Object.assign(config.deleteTermDeleteIdV1, param)),
    putTermEnableIdV1: param => axios(Object.assign(config.putTermEnableIdV1, param)),
    getTermListV1: param => axios(Object.assign(config.getTermListV1, param)),
    getTermSimpleListV1: param => axios(Object.assign(config.getTermSimpleListV1, param)),
    getTermTermIdV1: param => axios(Object.assign(config.getTermTermIdV1, param)),
    putTermUpdateIdV1: param => axios(Object.assign(config.putTermUpdateIdV1, param)),
    postToolTestV1: param => axios(Object.assign(config.postToolTestV1, param)),
    postWiseConfigAddV1: param => axios(Object.assign(config.postWiseConfigAddV1, param)),
    getWiseConfigListV1: param => axios(Object.assign(config.getWiseConfigListV1, param)),
    deleteWiseConfigIdDeleteV1: param => axios(Object.assign(config.deleteWiseConfigIdDeleteV1, param)),
    getWiseConfigIdDetailV1: param => axios(Object.assign(config.getWiseConfigIdDetailV1, param)),
    putWiseConfigIdUpdateV1: param => axios(Object.assign(config.putWiseConfigIdUpdateV1, param)),
    putWxColumnCardHotBankCardShiftIdV1: param => axios(Object.assign(config.putWxColumnCardHotBankCardShiftIdV1, param)),
    postWxColumnCardHotBankCardsListV1: param => axios(Object.assign(config.postWxColumnCardHotBankCardsListV1, param)),
    getWxColumnCardHotBankHotBankListV1: param => axios(Object.assign(config.getWxColumnCardHotBankHotBankListV1, param)),
    postWxColumnCardHotBankItemAddV1: param => axios(Object.assign(config.postWxColumnCardHotBankItemAddV1, param)),
    getWxColumnCardHotBankItemDetailIdV1: param => axios(Object.assign(config.getWxColumnCardHotBankItemDetailIdV1, param)),
    putWxColumnCardHotBankItemShiftIdV1: param => axios(Object.assign(config.putWxColumnCardHotBankItemShiftIdV1, param)),
    putWxColumnCardHotBankItemUpdateStatusIdV1: param => axios(Object.assign(config.putWxColumnCardHotBankItemUpdateStatusIdV1, param)),
    deleteWxColumnCardHotBankItemIdDeleteV1: param => axios(Object.assign(config.deleteWxColumnCardHotBankItemIdDeleteV1, param)),
    putWxColumnCardHotBankItemIdUpdateV1: param => axios(Object.assign(config.putWxColumnCardHotBankItemIdUpdateV1, param)),
    postWxColumnCardHotBankListV1: param => axios(Object.assign(config.postWxColumnCardHotBankListV1, param)),
    postWxColumnConfigCardHotBankDetailV1: param => axios(Object.assign(config.postWxColumnConfigCardHotBankDetailV1, param)),
    postWxColumnConfigHotCardDetailV1: param => axios(Object.assign(config.postWxColumnConfigHotCardDetailV1, param)),
    getWxColumnConfigListV1: param => axios(Object.assign(config.getWxColumnConfigListV1, param)),
    postWxColumnConfigRecommendDetailV1: param => axios(Object.assign(config.postWxColumnConfigRecommendDetailV1, param)),
    putWxColumnConfigShiftIdV1: param => axios(Object.assign(config.putWxColumnConfigShiftIdV1, param)),
    postWxColumnConfigThemeDetailV1: param => axios(Object.assign(config.postWxColumnConfigThemeDetailV1, param)),
    putWxColumnConfigUpdateIdV1: param => axios(Object.assign(config.putWxColumnConfigUpdateIdV1, param)),
    putWxColumnConfigUpdateStatusIdV1: param => axios(Object.assign(config.putWxColumnConfigUpdateStatusIdV1, param)),
    putWxColumnConfigIdUpdateV1: param => axios(Object.assign(config.putWxColumnConfigIdUpdateV1, param)),
    postWxColumnHotCardCardsSelectedListV1: param => axios(Object.assign(config.postWxColumnHotCardCardsSelectedListV1, param)),
    postWxColumnHotCardCardsUnSelectedListV1: param => axios(Object.assign(config.postWxColumnHotCardCardsUnSelectedListV1, param)),
    postWxColumnHotCardItemAddV1: param => axios(Object.assign(config.postWxColumnHotCardItemAddV1, param)),
    getWxColumnHotCardItemDetailIdV1: param => axios(Object.assign(config.getWxColumnHotCardItemDetailIdV1, param)),
    putWxColumnHotCardItemShiftIdV1: param => axios(Object.assign(config.putWxColumnHotCardItemShiftIdV1, param)),
    putWxColumnHotCardItemUpdateStatusIdV1: param => axios(Object.assign(config.putWxColumnHotCardItemUpdateStatusIdV1, param)),
    deleteWxColumnHotCardItemIdDeleteV1: param => axios(Object.assign(config.deleteWxColumnHotCardItemIdDeleteV1, param)),
    putWxColumnHotCardItemIdUpdateV1: param => axios(Object.assign(config.putWxColumnHotCardItemIdUpdateV1, param)),
    postWxColumnRecommendCardsListV1: param => axios(Object.assign(config.postWxColumnRecommendCardsListV1, param)),
    postWxColumnRecommendItemAddV1: param => axios(Object.assign(config.postWxColumnRecommendItemAddV1, param)),
    getWxColumnRecommendItemDetailIdV1: param => axios(Object.assign(config.getWxColumnRecommendItemDetailIdV1, param)),
    postWxColumnRecommendItemListV1: param => axios(Object.assign(config.postWxColumnRecommendItemListV1, param)),
    putWxColumnRecommendItemShiftIdV1: param => axios(Object.assign(config.putWxColumnRecommendItemShiftIdV1, param)),
    putWxColumnRecommendItemUpdateStatusIdV1: param => axios(Object.assign(config.putWxColumnRecommendItemUpdateStatusIdV1, param)),
    deleteWxColumnRecommendItemIdDeleteV1: param => axios(Object.assign(config.deleteWxColumnRecommendItemIdDeleteV1, param)),
    putWxColumnRecommendItemIdUpdateV1: param => axios(Object.assign(config.putWxColumnRecommendItemIdUpdateV1, param)),
    getWxColumnThemeCardThemeListV1: param => axios(Object.assign(config.getWxColumnThemeCardThemeListV1, param)),
    postWxColumnThemeItemAddV1: param => axios(Object.assign(config.postWxColumnThemeItemAddV1, param)),
    getWxColumnThemeItemDetailIdV1: param => axios(Object.assign(config.getWxColumnThemeItemDetailIdV1, param)),
    putWxColumnThemeItemShiftIdV1: param => axios(Object.assign(config.putWxColumnThemeItemShiftIdV1, param)),
    putWxColumnThemeItemUpdateStatusIdV1: param => axios(Object.assign(config.putWxColumnThemeItemUpdateStatusIdV1, param)),
    deleteWxColumnThemeItemIdDeleteV1: param => axios(Object.assign(config.deleteWxColumnThemeItemIdDeleteV1, param)),
    putWxColumnThemeItemIdUpdateV1: param => axios(Object.assign(config.putWxColumnThemeItemIdUpdateV1, param)),
    postWxColumnThemeListV1: param => axios(Object.assign(config.postWxColumnThemeListV1, param)),
    postChannelConfigCreateOrUpdateV2: param => axios(Object.assign(config.postChannelConfigCreateOrUpdateV2, param)),
    getChannelConfigListV2: param => axios(Object.assign(config.getChannelConfigListV2, param)),
    postChannelConfigStatusV2: param => axios(Object.assign(config.postChannelConfigStatusV2, param)),
};
