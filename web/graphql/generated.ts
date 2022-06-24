import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Banking account number is a string of 5 to 17 alphanumeric values for representing an generic account number */
  AccountNumber: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: any;
  /** A country code as defined by ISO 3166-1 alpha-2 */
  CountryCode: any;
  /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
  Currency: any;
  /** A field whose value conforms to the standard DID format as specified in did-core: https://www.w3.org/TR/did-core/. */
  DID: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  Duration: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  GUID: any;
  /** A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSL: any;
  /** A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSLA: any;
  /** A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors. */
  HexColorCode: any;
  /** A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal. */
  Hexadecimal: any;
  /** A field whose value is an International Bank Account Number (IBAN): https://en.wikipedia.org/wiki/International_Bank_Account_Number. */
  IBAN: any;
  /** A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4. */
  IPv4: any;
  /** A field whose value is a IPv6 address: https://en.wikipedia.org/wiki/IPv6. */
  IPv6: any;
  /** A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number. */
  ISBN: any;
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  ISO8601Duration: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any;
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: any;
  /** A local date string (i.e., with no associated timezone) in `YYYY-MM-DD` format, e.g. `2020-01-01`. */
  LocalDate: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`.  This scalar is very similar to the `LocalTime`, with the only difference being that `LocalEndTime` also allows `24:00` as a valid value to indicate midnight of the following day.  This is useful when using the scalar to represent the exclusive upper bound of a time block. */
  LocalEndTime: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
  LocalTime: any;
  /** The locale in the format of a BCP 47 (RFC 5646) standard string */
  Locale: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: any;
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: any;
  /** A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address. */
  MAC: any;
  /** Floats that will have a value less than 0. */
  NegativeFloat: any;
  /** Integers that will have a value less than 0. */
  NegativeInt: any;
  /** A string that cannot be passed as an empty value */
  NonEmptyString: any;
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: any;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: any;
  /** Floats that will have a value of 0 or less. */
  NonPositiveFloat: any;
  /** Integers that will have a value of 0 or less. */
  NonPositiveInt: any;
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  ObjectID: any;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: any;
  /** A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports */
  Port: any;
  /** Floats that will have a value greater than 0. */
  PositiveFloat: any;
  /** Integers that will have a value greater than 0. */
  PositiveInt: any;
  /** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg. */
  PostalCode: any;
  /** A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGB: any;
  /** A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGBA: any;
  /** In the US, an ABA routing transit number (`ABA RTN`) is a nine-digit code to identify the financial institution. */
  RoutingNumber: any;
  /** The `SafeInt` scalar type represents non-fractional signed whole numeric values that are considered safe as defined by the ECMAScript specification. */
  SafeInt: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
  /** A field whose value exists in the standard IANA Time Zone Database: https://www.iana.org/time-zones */
  TimeZone: any;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** A currency string, such as $21.25 */
  USCurrency: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: any;
  /** Floats that will have a value of 0 or more. */
  UnsignedFloat: any;
  /** Integers that will have a value of 0 or more. */
  UnsignedInt: any;
  /** A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  UtcOffset: any;
  /** Represents NULL values */
  Void: any;
};

export type ApiBatchPayload = {
  __typename?: 'ApiBatchPayload';
  count: Scalars['Int'];
};

export type ApiBatchPayloadResult = ApiBatchPayload | ApiOperationError;

export type ApiCreateError = ApiError & {
  __typename?: 'ApiCreateError';
  message: Scalars['String'];
  errors?: Maybe<Array<ErrorField>>;
};

export type ApiDeleteError = ApiError & {
  __typename?: 'ApiDeleteError';
  message: Scalars['String'];
  errors?: Maybe<Array<ErrorField>>;
};

export type ApiError = {
  message: Scalars['String'];
};

export type ApiLoginError = ApiError & {
  __typename?: 'ApiLoginError';
  message: Scalars['String'];
  errors?: Maybe<Array<ErrorField>>;
};

export type ApiNotFoundError = ApiError & {
  __typename?: 'ApiNotFoundError';
  message: Scalars['String'];
  errors?: Maybe<Array<ErrorField>>;
};

export type ApiOperationError = ApiError & {
  __typename?: 'ApiOperationError';
  message: Scalars['String'];
  errors?: Maybe<Array<ErrorField>>;
};

export type ApiPasswordResetError = ApiError & {
  __typename?: 'ApiPasswordResetError';
  message: Scalars['String'];
  errors?: Maybe<Array<ErrorField>>;
};

export type ApiUpdateError = ApiError & {
  __typename?: 'ApiUpdateError';
  message: Scalars['String'];
  errors?: Maybe<Array<ErrorField>>;
};

export type CatchmentDistrict = {
  __typename?: 'CatchmentDistrict';
  id: Scalars['ID'];
  disabled: Scalars['Boolean'];
  district_id: Scalars['String'];
  district?: Maybe<DistrictResult>;
  catchment_province_id: Scalars['String'];
  catchment_province?: Maybe<CatchmentProvinceResult>;
  water_treatment_plants?: Maybe<Array<WaterTreatmentPlant>>;
  service_areas?: Maybe<Array<ServiceArea>>;
  sewer_treatment_plants?: Maybe<Array<SewerTreatmentPlant>>;
  district_users?: Maybe<Array<DistrictUser>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type CatchmentDistrictResult = CatchmentDistrict | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type CatchmentDistrictUpdateInput = {
  disabled: Scalars['Boolean'];
};

export type CatchmentProvince = {
  __typename?: 'CatchmentProvince';
  id: Scalars['ID'];
  disabled: Scalars['Boolean'];
  province_id: Scalars['String'];
  province?: Maybe<ProvinceResult>;
  organisation_id: Scalars['String'];
  organisation?: Maybe<OrganisationResult>;
  catchment_districts?: Maybe<Array<CatchmentDistrict>>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  last_modified_at?: Maybe<Scalars['DateTime']>;
  last_modified_by?: Maybe<Scalars['String']>;
};

export type CatchmentProvinceResult = CatchmentProvince | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type CatchmentProvinceUpdateInput = {
  disabled: Scalars['Boolean'];
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['ID'];
  code: Scalars['String'];
  name: Scalars['String'];
  flag?: Maybe<Scalars['Byte']>;
  provinces?: Maybe<Array<Province>>;
  organisations?: Maybe<Array<Organisation>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type CountryResult = Country | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type CountryUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
};

export type CreateCatchmentDistrictInput = {
  district_id: Scalars['String'];
  catchment_province_id: Scalars['String'];
};

export type CreateCatchmentProvinceInput = {
  province_id: Scalars['String'];
  organisation_id: Scalars['String'];
};

export type CreateCountryInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  flag?: InputMaybe<Scalars['Byte']>;
  provinces?: InputMaybe<Array<CreateProvinceInput>>;
  organisations?: InputMaybe<Array<CreateOrganisationInput>>;
};

export type CreateDisaggregateInput = {
  name: Scalars['String'];
  type: DisaggregateType;
};

export type CreateDisaggregateOptionInput = {
  disaggregate_id: Scalars['ID'];
  option_id: Scalars['ID'];
};

export type CreateDisaggregateOptionsInput = {
  disaggregate_id: Scalars['ID'];
  option_ids: Array<Scalars['ID']>;
};

export type CreateDisaggregateWithOptionsInput = {
  name: Scalars['String'];
  type: DisaggregateType;
  option_ids: Array<Scalars['ID']>;
};

export type CreateDistrictInput = {
  name: Scalars['String'];
  code: Scalars['String'];
  province_id: Scalars['String'];
};

export type CreateDistrictUserInput = {
  organisation_user_id: Scalars['ID'];
  catchment_district_id: Scalars['ID'];
};

export type CreateIndicatorDisaggregateInput = {
  organisation_indicator_id: Scalars['ID'];
  disaggregate_option_id: Scalars['ID'];
};

export type CreateIndicatorDisaggregateReportInput = {
  report_id: Scalars['String'];
  indicator_disaggregate_id: Scalars['String'];
  target?: InputMaybe<Scalars['Float']>;
  achieved: Scalars['Float'];
  comment?: InputMaybe<Scalars['String']>;
};

export type CreateIndicatorDisaggregatesInput = {
  organisation_indicator_id: Scalars['ID'];
  disaggregate_option_ids: Array<Scalars['ID']>;
};

export type CreateIndicatorInput = {
  indicator_number: Scalars['String'];
  description: Scalars['String'];
  category: Scalars['String'];
  type: IndicatorType;
  indicator_unit_id: Scalars['String'];
  report_template_id: Scalars['String'];
};

export type CreateIndicatorUnitInput = {
  unit: Scalars['String'];
  display_name: Scalars['String'];
};

export type CreateInvitedUserInput = {
  user_invitation_id: Scalars['ID'];
  organisation_id: Scalars['ID'];
  catchment_district_ids: Array<Scalars['ID']>;
  user_details: CreateUserInput;
};

export type CreateOptionInput = {
  option_name: Scalars['String'];
};

export type CreateOrganisationIndicatorInput = {
  indicator_id: Scalars['String'];
  organisation_id: Scalars['ID'];
};

export type CreateOrganisationIndicatorsInput = {
  indicator_id: Scalars['String'];
  organisation_id: Scalars['ID'];
  disaggregate_option_ids: Array<Scalars['ID']>;
};

export type CreateOrganisationIndicatorsResult = CreateOrganisationIndicatorsSuccess | ApiCreateError;

export type CreateOrganisationIndicatorsSuccess = {
  __typename?: 'CreateOrganisationIndicatorsSuccess';
  organisation_indicators: Array<OrganisationIndicator>;
};

export type CreateOrganisationInput = {
  name: Scalars['String'];
  logo?: InputMaybe<Scalars['Byte']>;
  country_id: Scalars['String'];
};

export type CreateOrganisationReportTemplateInput = {
  report_template_id: Scalars['String'];
  organisation_id: Scalars['ID'];
};

export type CreateOrganisationReportTemplatesInput = {
  organisation_id: Scalars['ID'];
  report_template_ids: Array<Scalars['ID']>;
};

export type CreateOrganisationUserInput = {
  user_id: Scalars['ID'];
  organisation_id: Scalars['ID'];
};

export type CreateProvinceInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  country_id: Scalars['String'];
};

export type CreateReportInput = {
  reporting_period: Scalars['String'];
  reporting_period_start_date: Scalars['DateTime'];
  reporting_period_end_date: Scalars['DateTime'];
  report_due_date: Scalars['DateTime'];
  reporting_date: Scalars['DateTime'];
  organisation_report_template_id: Scalars['String'];
  catchment_district_id: Scalars['String'];
};

export type CreateReportTemplateInput = {
  name: Scalars['String'];
  type: IndicatorType;
  frequency: ReportingFrequency;
  window: Scalars['Int'];
};

export type CreateResidenceInput = {
  name: Scalars['String'];
  cost_classification: ResidenceClassification;
  district_id: Scalars['String'];
};

export type CreateServiceAreaInput = {
  residence_id: Scalars['String'];
  catchment_district_id: Scalars['String'];
};

export type CreateServiceAreaSewerConnectionInput = {
  connections: Scalars['BigInt'];
  sewer_netowrk_id: Scalars['ID'];
  service_area_id: Scalars['ID'];
};

export type CreateServiceAreaWaterConnectionInput = {
  connections: Scalars['BigInt'];
  water_netowrk_id: Scalars['ID'];
  service_area_id: Scalars['ID'];
};

export type CreateSewerNetworkInput = {
  name: Scalars['String'];
  plant_id: Scalars['String'];
  type: NetworkOwnershipType;
};

export type CreateSewerTreatmentPlantInput = {
  name: Scalars['String'];
  ponds: Scalars['Int'];
  capacity: Scalars['Float'];
  catchment_district_id: Scalars['String'];
  gps?: InputMaybe<Scalars['String']>;
};

export type CreateSewerTreatmentPlantPayload = {
  __typename?: 'CreateSewerTreatmentPlantPayload';
  sewer_treatment_plant: SewerTreatmentPlant;
};

export type CreateUserInput = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  user_roles: Array<UserRoleType>;
};

export type CreateUserInvitationInput = {
  email: Scalars['String'];
  organisation_id: Scalars['String'];
  district_ids: Array<Scalars['String']>;
};

export type CreateUserInvitationPayload = {
  __typename?: 'CreateUserInvitationPayload';
  user_invitation?: Maybe<UserInvitation>;
};

export type CreateWaterNetworkInput = {
  name: Scalars['String'];
  plant_id: Scalars['String'];
  type: NetworkOwnershipType;
};

export type CreateWaterProductionSiteInput = {
  name: Scalars['String'];
  static_suction_head: Scalars['Float'];
  static_discharge_head: Scalars['Float'];
  type: WaterProductionSiteType;
  plant_id: Scalars['String'];
  gps?: InputMaybe<Scalars['String']>;
};

export type CreateWaterProductionSitePayload = {
  __typename?: 'CreateWaterProductionSitePayload';
  water_production_site: WaterProductionSite;
};

export type CreateWaterStorageTankInput = {
  name: Scalars['String'];
  type: WaterStorageTankType;
  storage_capacity: Scalars['Float'];
  plant_id: Scalars['String'];
  gps?: InputMaybe<Scalars['String']>;
};

export type CreateWaterStorageTankPayload = {
  __typename?: 'CreateWaterStorageTankPayload';
  water_storage_tank: WaterStorageTank;
};

export type CreateWaterTreatmentPlantInput = {
  name: Scalars['String'];
  water_source: WaterSourceType;
  production_capacity: Scalars['Float'];
  catchment_district_id: Scalars['String'];
  gps?: InputMaybe<Scalars['String']>;
};

export type CreateWaterTreatmentPlantPayload = {
  __typename?: 'CreateWaterTreatmentPlantPayload';
  water_treatment_plant: WaterTreatmentPlant;
};

export type DeleteCatchmentDistrictInput = {
  id: Scalars['ID'];
};

export type DeleteCatchmentProvinceInput = {
  id: Scalars['ID'];
};

export type DeleteCountryInput = {
  id: Scalars['ID'];
};

export type DeleteDisaggregateInput = {
  id: Scalars['ID'];
};

export type DeleteDisaggregateOptionInput = {
  id: Scalars['ID'];
};

export type DeleteDistrictInput = {
  id: Scalars['ID'];
};

export type DeleteDistrictUserInput = {
  id: Scalars['ID'];
};

export type DeleteIndicatorDisaggregateInput = {
  id: Scalars['ID'];
};

export type DeleteIndicatorDisaggregateReportInput = {
  id: Scalars['ID'];
};

export type DeleteIndicatorInput = {
  id: Scalars['ID'];
};

export type DeleteIndicatorUnitInput = {
  id: Scalars['ID'];
};

export type DeleteOptionInput = {
  id: Scalars['ID'];
};

export type DeleteOrganisationIndicatorInput = {
  id: Scalars['ID'];
};

export type DeleteOrganisationInput = {
  id: Scalars['ID'];
};

export type DeleteOrganisationReportTemplateInput = {
  id: Scalars['ID'];
};

export type DeleteOrganisationUserInput = {
  id: Scalars['ID'];
};

export type DeleteProvinceInput = {
  id: Scalars['ID'];
};

export type DeleteReportInput = {
  id: Scalars['ID'];
};

export type DeleteReportTemplateInput = {
  id: Scalars['ID'];
};

export type DeleteResidenceInput = {
  id: Scalars['ID'];
};

export type DeleteServiceAreaInput = {
  id: Scalars['ID'];
};

export type DeleteServiceAreaSewerConnectionInput = {
  service_area_id: Scalars['ID'];
  sewer_netowrk_id: Scalars['ID'];
};

export type DeleteServiceAreaWaterConnectionInput = {
  service_area_id: Scalars['ID'];
  water_netowrk_id: Scalars['ID'];
};

export type DeleteSewerTreatmentPlantsInput = {
  id?: InputMaybe<Scalars['ID']>;
  catchment_district_id?: InputMaybe<Scalars['String']>;
};

export type DeleteUserInput = {
  id: Scalars['ID'];
};

export type DeleteUserInvitationInput = {
  id: Scalars['String'];
};

export type DeleteUserInvitationPayload = {
  __typename?: 'DeleteUserInvitationPayload';
  user_invitation?: Maybe<UserInvitation>;
};

export type DeleteWaterProductionSiteInput = {
  id: Scalars['ID'];
};

export type DeleteWaterProductionSitePayload = {
  __typename?: 'DeleteWaterProductionSitePayload';
  water_production_site: WaterProductionSite;
};

export type DeleteWaterStorageTankInput = {
  id: Scalars['ID'];
};

export type DeleteWaterStorageTankPayload = {
  __typename?: 'DeleteWaterStorageTankPayload';
  water_storage_tank: WaterStorageTank;
};

export type DeleteWaterTreatmentPlantsInput = {
  id?: InputMaybe<Scalars['ID']>;
  catchment_district_id?: InputMaybe<Scalars['String']>;
};

export type DisableUserInput = {
  id: Scalars['ID'];
  update: UserDisableInput;
};

export type Disaggregate = {
  __typename?: 'Disaggregate';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: DisaggregateType;
  disaggregate_options?: Maybe<Array<DisaggregateOption>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type DisaggregateOption = {
  __typename?: 'DisaggregateOption';
  id: Scalars['ID'];
  option_id: Scalars['String'];
  option?: Maybe<OptionResult>;
  disaggregate_id: Scalars['ID'];
  disaggregate?: Maybe<DisaggregateResult>;
  indicator_disaggregates?: Maybe<Array<IndicatorDisaggregate>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type DisaggregateOptionResult = DisaggregateOption | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type DisaggregateResult = Disaggregate | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export enum DisaggregateType {
  Number = 'NUMBER',
  WithParameters = 'WITH_PARAMETERS'
}

export type DisaggregateUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<DisaggregateType>;
};

export type District = {
  __typename?: 'District';
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
  province_id: Scalars['String'];
  province?: Maybe<ProvinceResult>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type DistrictResult = District | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type DistrictUpdateInput = {
  code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type DistrictUser = {
  __typename?: 'DistrictUser';
  id: Scalars['ID'];
  organisation_user_id: Scalars['ID'];
  organisation_user?: Maybe<OrganisationUserResult>;
  catchment_district_id: Scalars['ID'];
  catchment_district?: Maybe<CatchmentDistrictResult>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type DistrictUserResult = DistrictUser | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type ErrorField = {
  __typename?: 'ErrorField';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Indicator = {
  __typename?: 'Indicator';
  id: Scalars['ID'];
  indicator_number: Scalars['String'];
  description: Scalars['String'];
  category: Scalars['String'];
  type: IndicatorType;
  contributing_organisation: Scalars['String'];
  report_template_id: Scalars['String'];
  report_template?: Maybe<ReportTemplateResult>;
  indicator_unit_id: Scalars['String'];
  indicator_unit?: Maybe<IndicatorUnitResult>;
  indicator_organisations?: Maybe<Array<OrganisationIndicator>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type IndicatorDisaggregate = {
  __typename?: 'IndicatorDisaggregate';
  id: Scalars['ID'];
  organisation_indicator_id: Scalars['String'];
  organisation_indicator?: Maybe<OrganisationIndicatorResult>;
  disaggregate_option_id: Scalars['ID'];
  disaggregate_option?: Maybe<DisaggregateOptionResult>;
  indicator_disaggregate_reports?: Maybe<Array<IndicatorDisaggregateReport>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type IndicatorDisaggregateReport = {
  __typename?: 'IndicatorDisaggregateReport';
  id: Scalars['ID'];
  target?: Maybe<Scalars['Float']>;
  achieved: Scalars['Float'];
  comment?: Maybe<Scalars['String']>;
  report_id: Scalars['String'];
  report?: Maybe<ReportResult>;
  indicator_disaggregate_id: Scalars['String'];
  indicator_disaggregate?: Maybe<IndicatorDisaggregateResult>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type IndicatorDisaggregateReportResult = IndicatorDisaggregateReport | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type IndicatorDisaggregateReportUpdateInput = {
  target?: InputMaybe<Scalars['Float']>;
  achieved: Scalars['Float'];
  comment?: InputMaybe<Scalars['String']>;
};

export type IndicatorDisaggregateResult = IndicatorDisaggregate | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type IndicatorResult = Indicator | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export enum IndicatorType {
  Custom = 'CUSTOM',
  Nis = 'NIS'
}

export type IndicatorUnit = {
  __typename?: 'IndicatorUnit';
  id: Scalars['ID'];
  unit: Scalars['String'];
  display_name: Scalars['String'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type IndicatorUnitResult = IndicatorUnit | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type IndicatorUnitUpdateInput = {
  unit?: InputMaybe<Scalars['String']>;
  display_name?: InputMaybe<Scalars['String']>;
};

export type IndicatorUpdateInput = {
  indicator_number?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<IndicatorType>;
  indicator_unit_id?: InputMaybe<Scalars['String']>;
  report_template_id?: InputMaybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
};

export type LoginResult = LoginSuccess | ApiLoginError;

export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  accessToken?: Maybe<Scalars['JWT']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCountry: CountryResult;
  deleteCountry: CountryResult;
  updateCountry: CountryResult;
  createProvince: ProvinceResult;
  deleteProvince: ProvinceResult;
  updateProvince: ProvinceResult;
  createDistrict: DistrictResult;
  updateDistrict: DistrictResult;
  deleteDistrict: DistrictResult;
  createOrganisation: OrganisationResult;
  updateOrganisation: OrganisationResult;
  deleteOrganisation: OrganisationResult;
  createCatchmentProvince: CatchmentProvinceResult;
  updateCatchmentProvince: CatchmentProvinceResult;
  deleteCatchmentProvince: CatchmentProvinceResult;
  createCatchmentDistrict: CatchmentDistrictResult;
  updateCatchmentDistrict: CatchmentDistrictResult;
  deleteCatchmentDistrict: CatchmentDistrictResult;
  createUser: UserResult;
  createInvitedUser: UserResult;
  deleteUser: UserResult;
  disableUser: UserResult;
  updateUser: UserResult;
  login: LoginResult;
  requestPasswordReset: PasswordResetRequestResult;
  resetPassword: PasswordResetResult;
  createOrganisationUser: OrganisationUserResult;
  updateOrganisationUser: OrganisationUserResult;
  deleteOrganisationUser: OrganisationUserResult;
  createDistrictUser: DistrictUserResult;
  deleteDistrictUser: DistrictUserResult;
  createUserInvitation?: Maybe<CreateUserInvitationPayload>;
  deleteUserInvitation?: Maybe<DeleteUserInvitationPayload>;
  createResidence: ResidenceResult;
  updateResidence: ResidenceResult;
  deleteResidence: ResidenceResult;
  createServiceArea: ServiceAreaResult;
  deleteServiceArea: ServiceAreaResult;
  createWaterTreatmentPlant: WaterTreatmentPlantResult;
  updateWaterTreatmentPlant: WaterTreatmentPlantResult;
  deleteWaterTreatmentPlants: ApiBatchPayloadResult;
  createWaterStorageTank?: Maybe<CreateWaterStorageTankPayload>;
  updateWaterStorageTank?: Maybe<UpdateWaterStorageTankPayload>;
  deleteWaterStorageTank?: Maybe<DeleteWaterStorageTankPayload>;
  createWaterProductionSite?: Maybe<CreateWaterProductionSitePayload>;
  updateWaterProductionSite?: Maybe<UpdateWaterProductionSitePayload>;
  deleteWaterProductionSite?: Maybe<DeleteWaterProductionSitePayload>;
  createWaterNetwork: WaterNetworkResult;
  updateWaterNetwork: WaterNetworkResult;
  deleteWaterNetwork: WaterNetworkResult;
  createServiceAreaWaterConnection: ServiceAreaWaterConnectionResult;
  updateServiceAreaWaterConnection: ServiceAreaWaterConnectionResult;
  deleteServiceAreaWaterConnection: ServiceAreaWaterConnectionResult;
  createSewerTreatmentPlant: SewerTreatmentPlantResult;
  updateSewerTreatmentPlant: SewerTreatmentPlantResult;
  deleteSewerTreatmentPlants: ApiBatchPayloadResult;
  createSewerNetwork: SewerNetworkResult;
  updateSewerNetwork: SewerNetworkResult;
  deleteSewerNetwork: SewerNetworkResult;
  createServiceAreaSewerConnection: ServiceAreaSewerConnectionResult;
  updateServiceAreaSewerConnection: ServiceAreaSewerConnectionResult;
  deleteServiceAreaSewerConnection: ServiceAreaSewerConnectionResult;
  createDisaggregateOption: DisaggregateOptionResult;
  createDisaggregateOptions: ApiBatchPayloadResult;
  deleteDisaggregateOption: DisaggregateOptionResult;
  createDisaggregate: DisaggregateResult;
  createDisaggregateWithOptions: DisaggregateResult;
  updateDisaggregate: DisaggregateResult;
  deleteDisaggregate: DisaggregateResult;
  createIndicatorUnit: IndicatorUnitResult;
  updateIndicatorUnit: IndicatorUnitResult;
  deleteIndicatorUnit: IndicatorUnitResult;
  createIndicator: IndicatorResult;
  updateIndicator: IndicatorResult;
  deleteIndicator: IndicatorResult;
  createReport: ReportResult;
  updateReport: ReportResult;
  deleteReport: ReportResult;
  createOrganisationReportTemplate: OrganisationReportTemplateResult;
  createOrganisationReportTemplates: ApiBatchPayloadResult;
  deleteOrganisationReportTemplate: OrganisationReportTemplateResult;
  createReportTemplate: ReportTemplateResult;
  updateReportTemplate: ReportTemplateResult;
  deleteReportTemplate: ReportTemplateResult;
  createOrganisationIndicator: OrganisationIndicatorResult;
  createOrganisationIndicators: CreateOrganisationIndicatorsResult;
  deleteOrganisationIndicator: OrganisationIndicatorResult;
  createIndicatorDisaggregate: IndicatorDisaggregateResult;
  createIndicatorDisaggregates: ApiBatchPayloadResult;
  deleteIndicatorDisaggregate: IndicatorDisaggregateResult;
  createOption: OptionResult;
  updateOption: OptionResult;
  deleteOption: OptionResult;
  createIndicatorDisaggregateReport: IndicatorDisaggregateReportResult;
  updateIndicatorDisaggregateReport: IndicatorDisaggregateReportResult;
  deleteIndicatorDisaggregateReport: IndicatorDisaggregateReportResult;
};


export type MutationCreateCountryArgs = {
  input: CreateCountryInput;
};


export type MutationDeleteCountryArgs = {
  input: DeleteCountryInput;
};


export type MutationUpdateCountryArgs = {
  input: UpdateCountryInput;
};


export type MutationCreateProvinceArgs = {
  input: CreateProvinceInput;
};


export type MutationDeleteProvinceArgs = {
  input: DeleteProvinceInput;
};


export type MutationUpdateProvinceArgs = {
  input: UpdateProvinceInput;
};


export type MutationCreateDistrictArgs = {
  input: CreateDistrictInput;
};


export type MutationUpdateDistrictArgs = {
  input: UpdateDistrictInput;
};


export type MutationDeleteDistrictArgs = {
  input: DeleteDistrictInput;
};


export type MutationCreateOrganisationArgs = {
  input: CreateOrganisationInput;
};


export type MutationUpdateOrganisationArgs = {
  input: UpdateOrganisationInput;
};


export type MutationDeleteOrganisationArgs = {
  input: DeleteOrganisationInput;
};


export type MutationCreateCatchmentProvinceArgs = {
  input: CreateCatchmentProvinceInput;
};


export type MutationUpdateCatchmentProvinceArgs = {
  input: UpdateCatchmentProvinceInput;
};


export type MutationDeleteCatchmentProvinceArgs = {
  input: DeleteCatchmentProvinceInput;
};


export type MutationCreateCatchmentDistrictArgs = {
  input: CreateCatchmentDistrictInput;
};


export type MutationUpdateCatchmentDistrictArgs = {
  input: UpdateCatchmentDistrictInput;
};


export type MutationDeleteCatchmentDistrictArgs = {
  input: DeleteCatchmentDistrictInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateInvitedUserArgs = {
  input: CreateInvitedUserInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDisableUserArgs = {
  input: DisableUserInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRequestPasswordResetArgs = {
  input: PasswordResetRequestInput;
};


export type MutationResetPasswordArgs = {
  input: PasswordResetInput;
};


export type MutationCreateOrganisationUserArgs = {
  input: CreateOrganisationUserInput;
};


export type MutationUpdateOrganisationUserArgs = {
  input: UpdateOrganisationUserInput;
};


export type MutationDeleteOrganisationUserArgs = {
  input: DeleteOrganisationUserInput;
};


export type MutationCreateDistrictUserArgs = {
  input: CreateDistrictUserInput;
};


export type MutationDeleteDistrictUserArgs = {
  input: DeleteDistrictUserInput;
};


export type MutationCreateUserInvitationArgs = {
  input: CreateUserInvitationInput;
};


export type MutationDeleteUserInvitationArgs = {
  input: DeleteUserInvitationInput;
};


export type MutationCreateResidenceArgs = {
  input: CreateResidenceInput;
};


export type MutationUpdateResidenceArgs = {
  input: UpdateResidenceInput;
};


export type MutationDeleteResidenceArgs = {
  input: DeleteResidenceInput;
};


export type MutationCreateServiceAreaArgs = {
  input: CreateServiceAreaInput;
};


export type MutationDeleteServiceAreaArgs = {
  input: DeleteServiceAreaInput;
};


export type MutationCreateWaterTreatmentPlantArgs = {
  input: CreateWaterTreatmentPlantInput;
};


export type MutationUpdateWaterTreatmentPlantArgs = {
  input: UpdateWaterTreatmentPlantInput;
};


export type MutationDeleteWaterTreatmentPlantsArgs = {
  filter: DeleteWaterTreatmentPlantsInput;
};


export type MutationCreateWaterStorageTankArgs = {
  input: CreateWaterStorageTankInput;
};


export type MutationUpdateWaterStorageTankArgs = {
  input: UpdateWaterStorageTankInput;
};


export type MutationDeleteWaterStorageTankArgs = {
  input: DeleteWaterStorageTankInput;
};


export type MutationCreateWaterProductionSiteArgs = {
  input: CreateWaterProductionSiteInput;
};


export type MutationUpdateWaterProductionSiteArgs = {
  input: UpdateWaterProductionSiteInput;
};


export type MutationDeleteWaterProductionSiteArgs = {
  input: DeleteWaterProductionSiteInput;
};


export type MutationCreateWaterNetworkArgs = {
  input: CreateWaterNetworkInput;
};


export type MutationUpdateWaterNetworkArgs = {
  input: UpdateWaterNetworkInput;
};


export type MutationDeleteWaterNetworkArgs = {
  id: Scalars['ID'];
};


export type MutationCreateServiceAreaWaterConnectionArgs = {
  input: CreateServiceAreaWaterConnectionInput;
};


export type MutationUpdateServiceAreaWaterConnectionArgs = {
  input: UpdateServiceAreaWaterConnectionInput;
};


export type MutationDeleteServiceAreaWaterConnectionArgs = {
  input: DeleteServiceAreaWaterConnectionInput;
};


export type MutationCreateSewerTreatmentPlantArgs = {
  input: CreateSewerTreatmentPlantInput;
};


export type MutationUpdateSewerTreatmentPlantArgs = {
  input: UpdateSewerTreatmentPlantInput;
};


export type MutationDeleteSewerTreatmentPlantsArgs = {
  filter: DeleteSewerTreatmentPlantsInput;
};


export type MutationCreateSewerNetworkArgs = {
  input: CreateSewerNetworkInput;
};


export type MutationUpdateSewerNetworkArgs = {
  input: UpdateSewerNetworkInput;
};


export type MutationDeleteSewerNetworkArgs = {
  id: Scalars['ID'];
};


export type MutationCreateServiceAreaSewerConnectionArgs = {
  input: CreateServiceAreaSewerConnectionInput;
};


export type MutationUpdateServiceAreaSewerConnectionArgs = {
  input: UpdateServiceAreaSewerConnectionInput;
};


export type MutationDeleteServiceAreaSewerConnectionArgs = {
  input: DeleteServiceAreaSewerConnectionInput;
};


export type MutationCreateDisaggregateOptionArgs = {
  input: CreateDisaggregateOptionInput;
};


export type MutationCreateDisaggregateOptionsArgs = {
  input: CreateDisaggregateOptionsInput;
};


export type MutationDeleteDisaggregateOptionArgs = {
  input: DeleteDisaggregateOptionInput;
};


export type MutationCreateDisaggregateArgs = {
  input: CreateDisaggregateInput;
};


export type MutationCreateDisaggregateWithOptionsArgs = {
  input: CreateDisaggregateWithOptionsInput;
};


export type MutationUpdateDisaggregateArgs = {
  input: UpdateDisaggregateInput;
};


export type MutationDeleteDisaggregateArgs = {
  input: DeleteDisaggregateInput;
};


export type MutationCreateIndicatorUnitArgs = {
  input: CreateIndicatorUnitInput;
};


export type MutationUpdateIndicatorUnitArgs = {
  input: UpdateIndicatorUnitInput;
};


export type MutationDeleteIndicatorUnitArgs = {
  input: DeleteIndicatorUnitInput;
};


export type MutationCreateIndicatorArgs = {
  input: CreateIndicatorInput;
};


export type MutationUpdateIndicatorArgs = {
  input: UpdateIndicatorInput;
};


export type MutationDeleteIndicatorArgs = {
  input: DeleteIndicatorInput;
};


export type MutationCreateReportArgs = {
  input: CreateReportInput;
};


export type MutationUpdateReportArgs = {
  input: UpdateReportInput;
};


export type MutationDeleteReportArgs = {
  input: DeleteReportInput;
};


export type MutationCreateOrganisationReportTemplateArgs = {
  input: CreateOrganisationReportTemplateInput;
};


export type MutationCreateOrganisationReportTemplatesArgs = {
  input: CreateOrganisationReportTemplatesInput;
};


export type MutationDeleteOrganisationReportTemplateArgs = {
  input: DeleteOrganisationReportTemplateInput;
};


export type MutationCreateReportTemplateArgs = {
  input: CreateReportTemplateInput;
};


export type MutationUpdateReportTemplateArgs = {
  input: UpdateReportTemplateInput;
};


export type MutationDeleteReportTemplateArgs = {
  input: DeleteReportTemplateInput;
};


export type MutationCreateOrganisationIndicatorArgs = {
  input: CreateOrganisationIndicatorInput;
};


export type MutationCreateOrganisationIndicatorsArgs = {
  input: Array<CreateOrganisationIndicatorsInput>;
};


export type MutationDeleteOrganisationIndicatorArgs = {
  input: DeleteOrganisationIndicatorInput;
};


export type MutationCreateIndicatorDisaggregateArgs = {
  input: CreateIndicatorDisaggregateInput;
};


export type MutationCreateIndicatorDisaggregatesArgs = {
  input: CreateIndicatorDisaggregatesInput;
};


export type MutationDeleteIndicatorDisaggregateArgs = {
  input: DeleteIndicatorDisaggregateInput;
};


export type MutationCreateOptionArgs = {
  input: CreateOptionInput;
};


export type MutationUpdateOptionArgs = {
  input: UpdateOptionInput;
};


export type MutationDeleteOptionArgs = {
  input: DeleteOptionInput;
};


export type MutationCreateIndicatorDisaggregateReportArgs = {
  input: CreateIndicatorDisaggregateReportInput;
};


export type MutationUpdateIndicatorDisaggregateReportArgs = {
  input: UpdateIndicatorDisaggregateReportInput;
};


export type MutationDeleteIndicatorDisaggregateReportArgs = {
  input: DeleteIndicatorDisaggregateReportInput;
};

export enum NetworkOwnershipType {
  Independent = 'INDEPENDENT',
  Internal = 'INTERNAL'
}

export type Option = {
  __typename?: 'Option';
  id: Scalars['ID'];
  option_name: Scalars['String'];
  disaggregate_options?: Maybe<Array<DisaggregateOption>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type OptionResult = Option | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type OptionUpdateInput = {
  option_name: Scalars['String'];
};

export type Organisation = {
  __typename?: 'Organisation';
  id: Scalars['ID'];
  name: Scalars['String'];
  logo?: Maybe<Scalars['Byte']>;
  country_id: Scalars['String'];
  country?: Maybe<CountryResult>;
  catchment_provinces?: Maybe<Array<CatchmentProvince>>;
  users?: Maybe<Array<OrganisationUser>>;
  organisation_report_templates?: Maybe<Array<OrganisationReportTemplate>>;
  organisation_indicators?: Maybe<Array<OrganisationIndicator>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type OrganisationIndicator = {
  __typename?: 'OrganisationIndicator';
  id: Scalars['ID'];
  indicator_id: Scalars['String'];
  indicator?: Maybe<IndicatorResult>;
  organisation_id: Scalars['ID'];
  organisation?: Maybe<OrganisationResult>;
  indicator_disaggregates?: Maybe<Array<IndicatorDisaggregate>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type OrganisationIndicatorResult = OrganisationIndicator | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type OrganisationReportTemplate = {
  __typename?: 'OrganisationReportTemplate';
  id: Scalars['ID'];
  report_template_id: Scalars['String'];
  report_template?: Maybe<ReportTemplateResult>;
  organisation_id: Scalars['ID'];
  organisation?: Maybe<OrganisationResult>;
  reports?: Maybe<Array<Report>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type OrganisationReportTemplateResult = OrganisationReportTemplate | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type OrganisationResult = Organisation | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type OrganisationUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['Byte']>;
};

export type OrganisationUser = {
  __typename?: 'OrganisationUser';
  id: Scalars['ID'];
  is_owner: Scalars['Boolean'];
  user_id: Scalars['String'];
  user?: Maybe<UserResult>;
  organisation_id: Scalars['String'];
  organisation?: Maybe<OrganisationResult>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type OrganisationUserResult = OrganisationUser | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type OrganisationUserUpdateInput = {
  is_owner: Scalars['Boolean'];
};

export type PasswordResetInput = {
  hashed_password_reset_token: Scalars['String'];
  password: Scalars['String'];
};

export type PasswordResetRequestInput = {
  email: Scalars['EmailAddress'];
};

export type PasswordResetRequestPayload = {
  __typename?: 'PasswordResetRequestPayload';
  hashed_password_reset_token: Scalars['String'];
};

export type PasswordResetRequestResult = PasswordResetRequestPayload | ApiPasswordResetError;

export type PasswordResetResult = User | ApiPasswordResetError;

export type Province = {
  __typename?: 'Province';
  id: Scalars['ID'];
  code: Scalars['String'];
  name: Scalars['String'];
  country_id: Scalars['String'];
  country?: Maybe<CountryResult>;
  districts?: Maybe<Array<District>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type ProvinceResult = Province | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type ProvinceUpdateInput = {
  code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  countries?: Maybe<Array<Country>>;
  country: CountryResult;
  provinces?: Maybe<Array<Province>>;
  province: ProvinceResult;
  districts?: Maybe<Array<District>>;
  district: DistrictResult;
  organisations?: Maybe<Array<Organisation>>;
  organisation?: Maybe<OrganisationResult>;
  catchment_provinces?: Maybe<Array<CatchmentProvince>>;
  catchment_province: CatchmentProvinceResult;
  catchment_districts?: Maybe<Array<CatchmentDistrict>>;
  catchment_district: CatchmentDistrictResult;
  users?: Maybe<Array<User>>;
  user: UserResult;
  me: UserResult;
  organisation_users?: Maybe<Array<OrganisationUser>>;
  organisation_user: OrganisationUserResult;
  district_users?: Maybe<Array<DistrictUser>>;
  district_user: DistrictUserResult;
  user_invitations?: Maybe<Array<UserInvitation>>;
  user_invitation?: Maybe<UserInvitation>;
  residence: ResidenceResult;
  residences?: Maybe<Array<Residence>>;
  service_areas?: Maybe<Array<ServiceArea>>;
  service_area: ServiceAreaResult;
  water_treatment_plants?: Maybe<Array<WaterTreatmentPlant>>;
  water_treatment_plant: WaterTreatmentPlantResult;
  water_storage_tanks?: Maybe<Array<WaterStorageTank>>;
  water_storage_tank: WaterStorageTank;
  water_production_sites?: Maybe<Array<WaterProductionSite>>;
  water_production_site?: Maybe<WaterProductionSite>;
  water_networks?: Maybe<Array<WaterNetwork>>;
  water_network: WaterNetworkResult;
  service_area_water_connections?: Maybe<Array<ServiceAreaWaterConnection>>;
  service_area_water_connection: ServiceAreaWaterConnectionResult;
  sewer_treatment_plants?: Maybe<Array<SewerTreatmentPlant>>;
  sewer_treatment_plant: SewerTreatmentPlantResult;
  sewer_networks?: Maybe<Array<SewerNetwork>>;
  sewer_network: SewerNetworkResult;
  service_area_sewer_connections?: Maybe<Array<ServiceAreaSewerConnection>>;
  service_area_sewer_connection: ServiceAreaSewerConnectionResult;
  disaggregate_options?: Maybe<Array<DisaggregateOption>>;
  disaggregate_option: DisaggregateOptionResult;
  disaggregates?: Maybe<Array<Disaggregate>>;
  disaggregate: DisaggregateResult;
  indicator_units?: Maybe<Array<IndicatorUnit>>;
  indicator_unit: IndicatorUnitResult;
  indicators?: Maybe<Array<Indicator>>;
  indicator: IndicatorResult;
  reports?: Maybe<Array<Report>>;
  report: ReportResult;
  organisation_report_templates?: Maybe<Array<OrganisationReportTemplate>>;
  organisation_report_template: OrganisationReportTemplateResult;
  report_templates?: Maybe<Array<ReportTemplate>>;
  report_template: ReportTemplateResult;
  organisation_indicators?: Maybe<Array<OrganisationIndicator>>;
  organisation_indicator: OrganisationIndicatorResult;
  indicator_disaggregates?: Maybe<Array<IndicatorDisaggregate>>;
  indicator_disaggregate: IndicatorDisaggregateResult;
  options?: Maybe<Array<Option>>;
  option: OptionResult;
  indicator_disaggregate_reports?: Maybe<Array<IndicatorDisaggregateReport>>;
  indicator_disaggregate_report: IndicatorDisaggregateReportResult;
};


export type QueryCountryArgs = {
  id: Scalars['ID'];
};


export type QueryProvincesArgs = {
  country_id: Scalars['ID'];
};


export type QueryProvinceArgs = {
  id: Scalars['ID'];
};


export type QueryDistrictsArgs = {
  province_id: Scalars['ID'];
};


export type QueryDistrictArgs = {
  id: Scalars['ID'];
};


export type QueryOrganisationsArgs = {
  country_id: Scalars['ID'];
};


export type QueryOrganisationArgs = {
  id: Scalars['ID'];
};


export type QueryCatchment_ProvincesArgs = {
  organisation_id: Scalars['ID'];
};


export type QueryCatchment_ProvinceArgs = {
  catchment_province_id: Scalars['ID'];
};


export type QueryCatchment_DistrictsArgs = {
  catchment_province_id: Scalars['ID'];
};


export type QueryCatchment_DistrictArgs = {
  catchment_district_id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryOrganisation_UsersArgs = {
  organisation_id: Scalars['ID'];
};


export type QueryOrganisation_UserArgs = {
  organisation_user_id: Scalars['ID'];
};


export type QueryDistrict_UsersArgs = {
  catchment_district_id: Scalars['ID'];
};


export type QueryDistrict_UserArgs = {
  district_user_id: Scalars['ID'];
};


export type QueryUser_InvitationsArgs = {
  args: UserInvitationsArgsInput;
};


export type QueryUser_InvitationArgs = {
  id: Scalars['ID'];
};


export type QueryResidenceArgs = {
  id: Scalars['ID'];
};


export type QueryResidencesArgs = {
  district_id: Scalars['ID'];
};


export type QueryService_AreasArgs = {
  catchment_district_id: Scalars['ID'];
};


export type QueryService_AreaArgs = {
  id: Scalars['ID'];
};


export type QueryWater_Treatment_PlantsArgs = {
  catchment_district_id: Scalars['ID'];
};


export type QueryWater_Treatment_PlantArgs = {
  id: Scalars['ID'];
};


export type QueryWater_Storage_TanksArgs = {
  plant_id: Scalars['ID'];
};


export type QueryWater_Storage_TankArgs = {
  id: Scalars['ID'];
};


export type QueryWater_Production_SitesArgs = {
  plant_id: Scalars['ID'];
};


export type QueryWater_Production_SiteArgs = {
  id: Scalars['ID'];
};


export type QueryWater_NetworksArgs = {
  plant_id: Scalars['ID'];
};


export type QueryWater_NetworkArgs = {
  id: Scalars['ID'];
};


export type QueryService_Area_Water_ConnectionsArgs = {
  service_area_id: Scalars['ID'];
};


export type QueryService_Area_Water_ConnectionArgs = {
  water_netowrk_id: Scalars['ID'];
  service_area_id: Scalars['ID'];
};


export type QuerySewer_Treatment_PlantsArgs = {
  catchment_district_id: Scalars['ID'];
};


export type QuerySewer_Treatment_PlantArgs = {
  id: Scalars['ID'];
};


export type QuerySewer_NetworksArgs = {
  plant_id: Scalars['ID'];
};


export type QuerySewer_NetworkArgs = {
  id: Scalars['ID'];
};


export type QueryService_Area_Sewer_ConnectionsArgs = {
  service_area_id: Scalars['ID'];
};


export type QueryService_Area_Sewer_ConnectionArgs = {
  sewer_netowrk_id: Scalars['ID'];
  service_area_id: Scalars['ID'];
};


export type QueryDisaggregate_OptionArgs = {
  id: Scalars['ID'];
};


export type QueryDisaggregateArgs = {
  id: Scalars['ID'];
};


export type QueryIndicator_UnitArgs = {
  id: Scalars['ID'];
};


export type QueryIndicatorArgs = {
  id: Scalars['ID'];
};


export type QueryReportArgs = {
  id: Scalars['ID'];
};


export type QueryOrganisation_Report_TemplatesArgs = {
  organisation_id: Scalars['ID'];
};


export type QueryOrganisation_Report_TemplateArgs = {
  id: Scalars['ID'];
};


export type QueryReport_TemplateArgs = {
  id: Scalars['ID'];
};


export type QueryOrganisation_IndicatorsArgs = {
  organisation_id: Scalars['ID'];
};


export type QueryOrganisation_IndicatorArgs = {
  id: Scalars['ID'];
};


export type QueryIndicator_DisaggregatesArgs = {
  organisation_indicator_id: Scalars['ID'];
};


export type QueryIndicator_DisaggregateArgs = {
  id: Scalars['ID'];
};


export type QueryOptionArgs = {
  id: Scalars['ID'];
};


export type QueryIndicator_Disaggregate_ReportsArgs = {
  report_id: Scalars['ID'];
};


export type QueryIndicator_Disaggregate_ReportArgs = {
  id: Scalars['ID'];
};

export type Report = {
  __typename?: 'Report';
  id: Scalars['ID'];
  reporting_period: Scalars['String'];
  reporting_period_start_date: Scalars['DateTime'];
  reporting_period_end_date: Scalars['DateTime'];
  report_due_date: Scalars['DateTime'];
  reporting_date: Scalars['DateTime'];
  organisation_report_template_id: Scalars['String'];
  organisation_report_template?: Maybe<OrganisationReportTemplateResult>;
  catchment_district_id: Scalars['String'];
  catchment_district?: Maybe<CatchmentDistrictResult>;
  indicator_disaggregate_reports?: Maybe<Array<IndicatorDisaggregateReport>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type ReportResult = Report | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type ReportTemplate = {
  __typename?: 'ReportTemplate';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: IndicatorType;
  frequency: ReportingFrequency;
  window: Scalars['Int'];
  indicators?: Maybe<Array<Indicator>>;
  organisation_report_templates?: Maybe<Array<OrganisationReportTemplate>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type ReportTemplateResult = ReportTemplate | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type ReportTemplateUpdateInput = {
  name: Scalars['String'];
  type: IndicatorType;
  frequency: ReportingFrequency;
  window: Scalars['Int'];
};

export type ReportUpdateInput = {
  reporting_period_start_date: Scalars['DateTime'];
  reporting_period_end_date: Scalars['DateTime'];
  report_due_date: Scalars['DateTime'];
};

export enum ReportingFrequency {
  Weekly = 'WEEKLY',
  Monthly = 'MONTHLY',
  Quarterly = 'QUARTERLY',
  BiAnnualy = 'BI_ANNUALY',
  Annually = 'ANNUALLY'
}

export type Residence = {
  __typename?: 'Residence';
  id: Scalars['ID'];
  name: Scalars['String'];
  cost_classification: ResidenceClassification;
  district_id: Scalars['String'];
  district?: Maybe<DistrictResult>;
  service_areas?: Maybe<Array<ServiceArea>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export enum ResidenceClassification {
  HighCost = 'HIGH_COST',
  LowCost = 'LOW_COST',
  MediumCost = 'MEDIUM_COST',
  PeriUrban = 'PERI_URBAN',
  Rural = 'RURAL'
}

export type ResidenceResult = Residence | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type ResidenceUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  district_id?: InputMaybe<Scalars['String']>;
  cost_classification?: InputMaybe<ResidenceClassification>;
};

export type ServiceArea = {
  __typename?: 'ServiceArea';
  id: Scalars['ID'];
  residence_id: Scalars['String'];
  residence?: Maybe<ResidenceResult>;
  catchment_district_id: Scalars['String'];
  catchment_district: CatchmentDistrictResult;
  service_area_water_connections?: Maybe<Array<ServiceAreaWaterConnection>>;
  service_area_sewer_connections?: Maybe<Array<ServiceAreaSewerConnection>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type ServiceAreaResult = ServiceArea | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type ServiceAreaSewerConnection = {
  __typename?: 'ServiceAreaSewerConnection';
  connections: Scalars['BigInt'];
  sewer_netowrk_id: Scalars['ID'];
  sewer_network?: Maybe<SewerNetworkResult>;
  service_area_id: Scalars['ID'];
  service_area?: Maybe<ServiceAreaResult>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type ServiceAreaSewerConnectionResult = ServiceAreaSewerConnection | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type ServiceAreaSewerConnectionUpdateInput = {
  connections: Scalars['BigInt'];
};

export type ServiceAreaWaterConnection = {
  __typename?: 'ServiceAreaWaterConnection';
  connections: Scalars['BigInt'];
  water_netowrk_id: Scalars['ID'];
  water_network?: Maybe<WaterNetworkResult>;
  service_area_id: Scalars['ID'];
  service_area?: Maybe<ServiceAreaResult>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type ServiceAreaWaterConnectionResult = ServiceAreaWaterConnection | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type ServiceAreaWaterConnectionUpdateInput = {
  connections: Scalars['BigInt'];
};

export type SewerNetwork = {
  __typename?: 'SewerNetwork';
  id: Scalars['ID'];
  name: Scalars['String'];
  plant_id: Scalars['String'];
  sewer_treatment_plant?: Maybe<SewerTreatmentPlantResult>;
  type: NetworkOwnershipType;
  sewer_network_sewer_connections?: Maybe<Array<ServiceAreaSewerConnection>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type SewerNetworkResult = SewerNetwork | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type SewerNetworkUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<NetworkOwnershipType>;
};

export type SewerTreatmentPlant = {
  __typename?: 'SewerTreatmentPlant';
  id: Scalars['ID'];
  name: Scalars['String'];
  ponds: Scalars['Int'];
  capacity: Scalars['Float'];
  gps?: Maybe<Scalars['String']>;
  catchment_district_id: Scalars['String'];
  catchment_district?: Maybe<CatchmentDistrictResult>;
  sewer_network?: Maybe<SewerNetworkResult>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type SewerTreatmentPlantResult = SewerTreatmentPlant | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type SewerTreatmentPlantUpdateInput = {
  name: Scalars['String'];
  ponds: Scalars['Int'];
  capacity: Scalars['Float'];
  gps?: InputMaybe<Scalars['String']>;
};

export type UpdateCatchmentDistrictInput = {
  id: Scalars['ID'];
  update: CatchmentDistrictUpdateInput;
};

export type UpdateCatchmentProvinceInput = {
  id: Scalars['ID'];
  update: CatchmentProvinceUpdateInput;
};

export type UpdateCountryInput = {
  id: Scalars['ID'];
  update: CountryUpdateInput;
};

export type UpdateDisaggregateInput = {
  id: Scalars['ID'];
  update: DisaggregateUpdateInput;
};

export type UpdateDistrictInput = {
  id: Scalars['ID'];
  update: DistrictUpdateInput;
};

export type UpdateIndicatorDisaggregateReportInput = {
  id: Scalars['ID'];
  update: IndicatorDisaggregateReportUpdateInput;
};

export type UpdateIndicatorInput = {
  id: Scalars['ID'];
  update: IndicatorUpdateInput;
};

export type UpdateIndicatorUnitInput = {
  id: Scalars['ID'];
  update: IndicatorUnitUpdateInput;
};

export type UpdateOptionInput = {
  id: Scalars['ID'];
  update: OptionUpdateInput;
};

export type UpdateOrganisationInput = {
  id: Scalars['ID'];
  update: OrganisationUpdateInput;
};

export type UpdateOrganisationUserInput = {
  id: Scalars['ID'];
  update: OrganisationUserUpdateInput;
};

export type UpdateProvinceInput = {
  id: Scalars['ID'];
  update: ProvinceUpdateInput;
};

export type UpdateReportInput = {
  id: Scalars['ID'];
  update: ReportUpdateInput;
};

export type UpdateReportTemplateInput = {
  id: Scalars['ID'];
  update: ReportTemplateUpdateInput;
};

export type UpdateResidenceInput = {
  id: Scalars['ID'];
  update: ResidenceUpdateInput;
};

export type UpdateServiceAreaSewerConnectionInput = {
  service_area_id: Scalars['ID'];
  sewer_netowrk_id: Scalars['ID'];
  update: ServiceAreaSewerConnectionUpdateInput;
};

export type UpdateServiceAreaWaterConnectionInput = {
  service_area_id: Scalars['ID'];
  water_netowrk_id: Scalars['ID'];
  update: ServiceAreaWaterConnectionUpdateInput;
};

export type UpdateSewerNetworkInput = {
  id: Scalars['ID'];
  update: SewerNetworkUpdateInput;
};

export type UpdateSewerTreatmentPlantInput = {
  id: Scalars['ID'];
  update: SewerTreatmentPlantUpdateInput;
};

export type UpdateSewerTreatmentPlantPayload = {
  __typename?: 'UpdateSewerTreatmentPlantPayload';
  sewer_treatment_plant: SewerTreatmentPlant;
};

export type UpdateUserInput = {
  id: Scalars['ID'];
  update: UserUpdateInput;
};

export type UpdateWaterNetworkInput = {
  id: Scalars['ID'];
  update: WaterNetworkUpdateInput;
};

export type UpdateWaterProductionSiteInput = {
  id: Scalars['ID'];
  update: WaterProductionSiteUpdateInput;
};

export type UpdateWaterProductionSitePayload = {
  __typename?: 'UpdateWaterProductionSitePayload';
  water_production_site: WaterProductionSite;
};

export type UpdateWaterStorageTankInput = {
  id: Scalars['ID'];
  update: WaterStorageTankUpdateInput;
};

export type UpdateWaterStorageTankPayload = {
  __typename?: 'UpdateWaterStorageTankPayload';
  water_storage_tank: WaterStorageTank;
};

export type UpdateWaterTreatmentPlantInput = {
  id: Scalars['ID'];
  update: WaterTreatmentPlantUpdateInput;
};

export type UpdateWaterTreatmentPlantPayload = {
  __typename?: 'UpdateWaterTreatmentPlantPayload';
  water_treatment_plant: WaterTreatmentPlant;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  disabled?: Maybe<Scalars['Boolean']>;
  user_organisations?: Maybe<Array<OrganisationUser>>;
  user_roles: Array<UserRoleType>;
  hashed_confirmation_token?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['DateTime']>;
  hashed_password_reset_token?: Maybe<Scalars['String']>;
  last_login?: Maybe<Scalars['DateTime']>;
  theme?: Maybe<UserTheme>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type UserDisableInput = {
  disabled: Scalars['Boolean'];
};

export type UserInvitation = {
  __typename?: 'UserInvitation';
  id: Scalars['ID'];
  ttl: Scalars['DateTime'];
  email: Scalars['String'];
  organisation_id: Scalars['String'];
  district_ids?: Maybe<Array<Scalars['String']>>;
  invitation_token: Scalars['String'];
};

export type UserInvitationsArgsInput = {
  email?: InputMaybe<Scalars['String']>;
  organisation_id?: InputMaybe<Scalars['String']>;
  district_ids?: InputMaybe<Array<Scalars['String']>>;
};

export type UserResult = User | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export enum UserRoleType {
  Support = 'SUPPORT',
  Admin = 'ADMIN',
  Approver = 'APPROVER',
  DataEntry = 'DATA_ENTRY',
  User = 'USER'
}

export enum UserTheme {
  Dark = 'DARK',
  Light = 'LIGHT'
}

export type UserUpdateInput = {
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<UserTheme>;
  user_roles?: InputMaybe<Array<UserRoleType>>;
};

export type WaterNetwork = {
  __typename?: 'WaterNetwork';
  id: Scalars['ID'];
  name: Scalars['String'];
  plant_id: Scalars['String'];
  water_treatment_plant?: Maybe<WaterTreatmentPlantResult>;
  type: NetworkOwnershipType;
  water_network_water_connections?: Maybe<Array<ServiceAreaWaterConnection>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type WaterNetworkResult = WaterNetwork | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type WaterNetworkUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<NetworkOwnershipType>;
};

export type WaterProductionSite = {
  __typename?: 'WaterProductionSite';
  id: Scalars['ID'];
  name: Scalars['String'];
  static_suction_head: Scalars['Float'];
  static_discharge_head: Scalars['Float'];
  gps?: Maybe<Scalars['String']>;
  type: WaterProductionSiteType;
  plant_id: Scalars['String'];
  water_treatment_plant?: Maybe<WaterTreatmentPlantResult>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export enum WaterProductionSiteType {
  Borehole = 'BOREHOLE',
  Dam = 'DAM'
}

export type WaterProductionSiteUpdateInput = {
  name: Scalars['String'];
  static_suction_head: Scalars['Float'];
  static_discharge_head: Scalars['Float'];
  type: WaterProductionSiteType;
  gps?: InputMaybe<Scalars['String']>;
};

export enum WaterSourceType {
  Surface = 'SURFACE',
  Ground = 'GROUND'
}

export type WaterStorageTank = {
  __typename?: 'WaterStorageTank';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: WaterStorageTankType;
  storage_capacity: Scalars['Float'];
  gps?: Maybe<Scalars['String']>;
  plant_id: Scalars['String'];
  water_treatment_plant?: Maybe<WaterTreatmentPlantResult>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export enum WaterStorageTankType {
  Production = 'PRODUCTION',
  Distribution = 'DISTRIBUTION'
}

export type WaterStorageTankUpdateInput = {
  name: Scalars['String'];
  type: WaterStorageTankType;
  storage_capacity: Scalars['Float'];
  plant_id: Scalars['String'];
  gps?: InputMaybe<Scalars['String']>;
};

export type WaterTreatmentPlant = {
  __typename?: 'WaterTreatmentPlant';
  id: Scalars['ID'];
  name: Scalars['String'];
  water_source: WaterSourceType;
  production_capacity: Scalars['Float'];
  gps?: Maybe<Scalars['String']>;
  catchment_district_id: Scalars['String'];
  catchment_district?: Maybe<CatchmentDistrictResult>;
  water_production_sites?: Maybe<Array<WaterProductionSite>>;
  water_storage_tanks?: Maybe<Array<WaterStorageTank>>;
  water_network: WaterNetworkResult;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type WaterTreatmentPlantResult = WaterTreatmentPlant | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type WaterTreatmentPlantUpdateInput = {
  name: Scalars['String'];
  water_source: WaterSourceType;
  production_capacity: Scalars['Float'];
  gps?: InputMaybe<Scalars['String']>;
};

export type GetCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'Query', countries?: Array<{ __typename?: 'Country', id: string, name: string }> | null };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginSuccess', accessToken?: any | null } | { __typename?: 'ApiLoginError', message: string, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string }> | null } };


export const GetCountriesDocument = gql`
    query GetCountries {
  countries {
    id
    name
  }
}
    `;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
      }
export function useGetCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
        }
export type GetCountriesQueryHookResult = ReturnType<typeof useGetCountriesQuery>;
export type GetCountriesLazyQueryHookResult = ReturnType<typeof useGetCountriesLazyQuery>;
export type GetCountriesQueryResult = Apollo.QueryResult<GetCountriesQuery, GetCountriesQueryVariables>;
export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    ... on ApiLoginError {
      message
      errors {
        field
        message
      }
    }
    ... on LoginSuccess {
      accessToken
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;