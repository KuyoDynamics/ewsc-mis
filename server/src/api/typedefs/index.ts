import { typeDefs as scalarTypeDefs } from "graphql-scalars";
import { CountryTypeDefs } from "../country/index";
import { ProvinceTypeDefs } from "../province/index";
import { DistrictTypeDefs } from "../district/index";
import { OrganisationTypeDefs } from "../organisation/index";
import { CatchmentProvinceTypeDefs } from "../catchment-province/index";
import { CatchmentDistrictTypeDefs } from "../catchment-district/index";
import { UserTypeDefs } from "../user";
import { OrganisationUserTypeDefs } from "../organisation-user";
import { DistrictUserTypeDefs } from "../district-user";
import { UserInvitationTypeDefs } from "../user-invitation";
import { ResidenceTypeDefs } from "../residence";
import { ServiceAreaTypeDefs } from "../service-area";
import { WaterTreatmentPlantTypeDefs } from "../water-treatment-plant";
import { WaterStorageTankTypeDefs } from "../water-storage-tank";
import { WaterProductionSiteTypeDefs } from "../water-production-site";
import { WaterNetworkTypeDefs } from "../water-network";
import { ServiceAreaWaterConnectionTypeDefs } from "../service-area-water-connection";
import { SewerTreatmentPlantTypeDefs } from "../sewer-treatment-plant";
import { SewerNetworkTypeDefs } from "../sewer-network";
import { ServiceAreaSewerConnectionTypeDefs } from "../service-area-sewer-connection";
import { DisaggregateOptionTypeDefs } from "../disaggregate-option";
import { DisaggregateOptionSetTypeDefs } from "../disaggregate-option-set";
import { DisaggregateTypeDefs } from "../disaggregate";
import { IndicatorUnitTypeDefs } from "../indicator-unit";
import { IndicatorTypeDefs } from "../indicator";
import { ReportTypeTypeDefs } from "../report-type";
import { DisaggregateOptionSetReportTypeDefs } from "../disaggregate-option-set-report";
import { ReportTypeDefs } from "../report";

export default [
  CountryTypeDefs,
  ProvinceTypeDefs,
  DistrictTypeDefs,
  OrganisationTypeDefs,
  CatchmentProvinceTypeDefs,
  CatchmentDistrictTypeDefs,
  UserTypeDefs,
  OrganisationUserTypeDefs,
  DistrictUserTypeDefs,
  UserInvitationTypeDefs,
  ResidenceTypeDefs,
  ServiceAreaTypeDefs,
  WaterTreatmentPlantTypeDefs,
  WaterStorageTankTypeDefs,
  WaterProductionSiteTypeDefs,
  WaterNetworkTypeDefs,
  ServiceAreaWaterConnectionTypeDefs,
  SewerTreatmentPlantTypeDefs,
  SewerNetworkTypeDefs,
  ServiceAreaSewerConnectionTypeDefs,
  DisaggregateOptionTypeDefs,
  DisaggregateOptionSetTypeDefs,
  DisaggregateTypeDefs,
  IndicatorUnitTypeDefs,
  IndicatorTypeDefs,
  ReportTypeTypeDefs,
  DisaggregateOptionSetReportTypeDefs,
  ReportTypeDefs,
  scalarTypeDefs,
];
