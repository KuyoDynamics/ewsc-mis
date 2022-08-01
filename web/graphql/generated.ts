import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
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
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
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
  reports?: Maybe<Array<Report>>;
  district_users?: Maybe<Array<DistrictUser>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type CatchmentDistrictInput = {
  catchment_district_id: Scalars['ID'];
  roles: Array<DistrictUserRoleType>;
};

export type CatchmentDistrictResult = CatchmentDistrict | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type CatchmentDistrictUpdateInput = {
  disabled: Scalars['Boolean'];
};

export type CatchmentDistrictView = {
  __typename?: 'CatchmentDistrictView';
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
  province_id: Scalars['String'];
  province?: Maybe<ProvinceResult>;
  organisations_in_district?: Maybe<Array<CatchmentDistrict>>;
  residences?: Maybe<Array<Residence>>;
  disabled: Scalars['Boolean'];
  catchment_district_id: Scalars['String'];
  catchment_province_id: Scalars['String'];
  catchment_province?: Maybe<CatchmentProvinceView>;
  water_treatment_plants?: Maybe<Array<WaterTreatmentPlant>>;
  service_areas?: Maybe<Array<ServiceArea>>;
  sewer_treatment_plants?: Maybe<Array<SewerTreatmentPlant>>;
  reports?: Maybe<Array<Report>>;
  district_users?: Maybe<Array<DistrictUser>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
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

export type CatchmentProvinceView = {
  __typename?: 'CatchmentProvinceView';
  id: Scalars['ID'];
  code: Scalars['String'];
  name: Scalars['String'];
  disabled: Scalars['Boolean'];
  catchment_province_id: Scalars['String'];
  organisation_id: Scalars['String'];
  organisation?: Maybe<Organisation>;
  catchment_districts?: Maybe<Array<CatchmentDistrictView>>;
  country_id: Scalars['String'];
  country?: Maybe<Country>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  last_modified_at?: Maybe<Scalars['DateTime']>;
  last_modified_by?: Maybe<Scalars['String']>;
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
  roles: Array<DistrictUserRoleType>;
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
  catchment_districts: Array<CatchmentDistrictInput>;
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
  role: OrganisationUserRoleType;
  user_id: Scalars['ID'];
  organisation_id: Scalars['ID'];
  is_default_organisation: Scalars['Boolean'];
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
  icon?: InputMaybe<Scalars['Byte']>;
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
};

export type CreateUserInvitationCatchmentDistrictInput = {
  catchment_district_id: Scalars['ID'];
  roles: Array<DistrictUserRoleType>;
};

export type CreateUserInvitationInput = {
  email_addresses: Array<Scalars['EmailAddress']>;
  organisation_id: Scalars['ID'];
  organisation_role: OrganisationUserRoleType;
  catchment_districts?: InputMaybe<Array<CreateUserInvitationCatchmentDistrictInput>>;
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
  organisations_in_district?: Maybe<Array<CatchmentDistrict>>;
  residences?: Maybe<Array<Residence>>;
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
  is_default_user_district: Scalars['Boolean'];
  roles: Array<DistrictUserRoleType>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type DistrictUserResult = DistrictUser | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export enum DistrictUserRoleType {
  DistrictManager = 'DISTRICT_MANAGER',
  Approver = 'APPROVER',
  DataEntry = 'DATA_ENTRY',
  User = 'USER'
}

export enum EmailStatus {
  Sent = 'SENT',
  Rejected = 'REJECTED',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

export type ErrorField = {
  __typename?: 'ErrorField';
  field: Scalars['String'];
  message: Scalars['String'];
  value?: Maybe<Scalars['String']>;
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
  accessToken: Scalars['JWT'];
  id: Scalars['ID'];
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
  setUserDefaultProject: OrganisationUserResult;
  deleteOrganisationUser: OrganisationUserResult;
  createDistrictUser: DistrictUserResult;
  setUserDefaultDistrict: DistrictUserResult;
  updateUserRolesForDistrict: DistrictUserResult;
  deleteDistrictUser: DistrictUserResult;
  createUserInvitation: Array<UserInvitationResult>;
  sendUserInvitationEmail?: Maybe<Scalars['Void']>;
  deleteUserInvitation: UserInvitationResult;
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


export type MutationSetUserDefaultProjectArgs = {
  organisation_user_id: Scalars['ID'];
};


export type MutationDeleteOrganisationUserArgs = {
  input: DeleteOrganisationUserInput;
};


export type MutationCreateDistrictUserArgs = {
  input: CreateDistrictUserInput;
};


export type MutationSetUserDefaultDistrictArgs = {
  input: SetUserDefaultDistrictInput;
};


export type MutationUpdateUserRolesForDistrictArgs = {
  input: UpdateUserRolesForDistrictInput;
};


export type MutationDeleteDistrictUserArgs = {
  input: DeleteDistrictUserInput;
};


export type MutationCreateUserInvitationArgs = {
  input: CreateUserInvitationInput;
};


export type MutationSendUserInvitationEmailArgs = {
  input: SendInvitationEmailInput;
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
  allow_master_support: Scalars['Boolean'];
  country_id: Scalars['String'];
  country?: Maybe<CountryResult>;
  catchment_provinces?: Maybe<Array<CatchmentProvince>>;
  users?: Maybe<Array<OrganisationUser>>;
  organisation_report_templates?: Maybe<Array<OrganisationReportTemplate>>;
  organisation_indicators?: Maybe<Array<OrganisationIndicator>>;
  reports?: Maybe<Array<Report>>;
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

export type OrganisationIndicatorView = {
  __typename?: 'OrganisationIndicatorView';
  id: Scalars['ID'];
  indicator_number: Scalars['String'];
  description: Scalars['String'];
  category: Scalars['String'];
  type: IndicatorType;
  contributing_organisation: Scalars['String'];
  indicator_disaggregates?: Maybe<Array<IndicatorDisaggregate>>;
  report_template_id: Scalars['String'];
  report_template?: Maybe<ReportTemplate>;
  indicator_unit_id: Scalars['String'];
  indicator_unit?: Maybe<IndicatorUnit>;
  organisation_id: Scalars['ID'];
  organisation?: Maybe<OrganisationResult>;
  indicator_organisations?: Maybe<Array<Organisation>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

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

export type OrganisationReportTemplateView = {
  __typename?: 'OrganisationReportTemplateView';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: IndicatorType;
  frequency: ReportingFrequency;
  window: Scalars['Int'];
  icon?: Maybe<Scalars['Byte']>;
  indicators?: Maybe<Array<Indicator>>;
  organisation_id: Scalars['ID'];
  organisation?: Maybe<Organisation>;
  reports?: Maybe<Array<Report>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type OrganisationResult = Organisation | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type OrganisationUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['Byte']>;
};

export type OrganisationUser = {
  __typename?: 'OrganisationUser';
  id: Scalars['ID'];
  user_id: Scalars['String'];
  user?: Maybe<UserResult>;
  organisation_id: Scalars['String'];
  organisation?: Maybe<OrganisationResult>;
  is_default_organisation: Scalars['Boolean'];
  default_district?: Maybe<DistrictResult>;
  role: OrganisationUserRoleType;
  district_roles?: Maybe<Array<Scalars['String']>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type OrganisationUserResult = OrganisationUser | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export enum OrganisationUserRoleType {
  Support = 'SUPPORT',
  Owner = 'OWNER',
  Admin = 'ADMIN',
  User = 'USER'
}

export type OrganisationUserUpdateInput = {
  role: OrganisationUserRoleType;
};

export type OrganisationUserView = {
  __typename?: 'OrganisationUserView';
  id: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  disabled: Scalars['Boolean'];
  master_support: Scalars['Boolean'];
  organisation_id: Scalars['String'];
  organisation?: Maybe<UserOrganisation>;
  organisation_user_id: Scalars['String'];
  role: OrganisationUserRoleType;
  user_organisations?: Maybe<Array<UserOrganisation>>;
  user_districts?: Maybe<Array<UserDistrict>>;
  hashed_confirmation_token?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['DateTime']>;
  hashed_password_reset_token?: Maybe<Scalars['String']>;
  last_login?: Maybe<Scalars['DateTime']>;
  theme: UserTheme;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
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
  catchment_district: CatchmentDistrictResult;
  catchment_districts?: Maybe<Array<CatchmentDistrict>>;
  catchment_province: CatchmentProvinceResult;
  catchment_provinces?: Maybe<Array<CatchmentProvince>>;
  countries?: Maybe<Array<Country>>;
  country: CountryResult;
  default_user_district: UserDistrictResult;
  default_user_organisation: UserOrganisationResult;
  disaggregate: DisaggregateResult;
  disaggregate_option: DisaggregateOptionResult;
  disaggregate_options?: Maybe<Array<DisaggregateOption>>;
  disaggregates?: Maybe<Array<Disaggregate>>;
  district: DistrictResult;
  district_user: DistrictUserResult;
  district_users?: Maybe<Array<DistrictUser>>;
  districts?: Maybe<Array<District>>;
  indicator: IndicatorResult;
  indicator_disaggregate: IndicatorDisaggregateResult;
  indicator_disaggregate_report: IndicatorDisaggregateReportResult;
  indicator_disaggregate_reports?: Maybe<Array<IndicatorDisaggregateReport>>;
  indicator_disaggregates?: Maybe<Array<IndicatorDisaggregate>>;
  indicator_unit: IndicatorUnitResult;
  indicator_units?: Maybe<Array<IndicatorUnit>>;
  indicators?: Maybe<Array<Indicator>>;
  isLoggedIn: Scalars['Boolean'];
  me: UserResult;
  option: OptionResult;
  options?: Maybe<Array<Option>>;
  organisation?: Maybe<OrganisationResult>;
  organisation_indicator: OrganisationIndicatorResult;
  organisation_indicators?: Maybe<Array<OrganisationIndicator>>;
  organisation_report_template: OrganisationReportTemplateResult;
  organisation_report_templates?: Maybe<Array<OrganisationReportTemplate>>;
  organisation_reports?: Maybe<Array<Report>>;
  organisation_user: OrganisationUserResult;
  organisation_users?: Maybe<Array<OrganisationUser>>;
  organisations?: Maybe<Array<Organisation>>;
  province: ProvinceResult;
  provinces?: Maybe<Array<Province>>;
  report: ReportResult;
  report_template: ReportTemplateResult;
  report_templates?: Maybe<Array<ReportTemplate>>;
  reports?: Maybe<Array<Report>>;
  residence: ResidenceResult;
  residences?: Maybe<Array<Residence>>;
  service_area: ServiceAreaResult;
  service_area_sewer_connection: ServiceAreaSewerConnectionResult;
  service_area_sewer_connections?: Maybe<Array<ServiceAreaSewerConnection>>;
  service_area_water_connection: ServiceAreaWaterConnectionResult;
  service_area_water_connections?: Maybe<Array<ServiceAreaWaterConnection>>;
  service_areas?: Maybe<Array<ServiceArea>>;
  sewer_network: SewerNetworkResult;
  sewer_networks?: Maybe<Array<SewerNetwork>>;
  sewer_treatment_plant: SewerTreatmentPlantResult;
  sewer_treatment_plants?: Maybe<Array<SewerTreatmentPlant>>;
  user: UserResult;
  user_invitation: UserInvitationResult;
  user_invitations?: Maybe<Array<UserInvitation>>;
  users?: Maybe<Array<User>>;
  water_network: WaterNetworkResult;
  water_networks?: Maybe<Array<WaterNetwork>>;
  water_production_site?: Maybe<WaterProductionSite>;
  water_production_sites?: Maybe<Array<WaterProductionSite>>;
  water_storage_tank: WaterStorageTank;
  water_storage_tanks?: Maybe<Array<WaterStorageTank>>;
  water_treatment_plant: WaterTreatmentPlantResult;
  water_treatment_plants?: Maybe<Array<WaterTreatmentPlant>>;
};


export type QueryCatchment_DistrictArgs = {
  catchment_district_id: Scalars['ID'];
};


export type QueryCatchment_DistrictsArgs = {
  catchment_province_id: Scalars['ID'];
};


export type QueryCatchment_ProvinceArgs = {
  catchment_province_id: Scalars['ID'];
};


export type QueryCatchment_ProvincesArgs = {
  organisation_id: Scalars['ID'];
};


export type QueryCountryArgs = {
  id: Scalars['ID'];
};


export type QueryDefault_User_DistrictArgs = {
  user_id: Scalars['ID'];
  organisation_user_id: Scalars['ID'];
};


export type QueryDefault_User_OrganisationArgs = {
  user_id: Scalars['ID'];
};


export type QueryDisaggregateArgs = {
  id: Scalars['ID'];
};


export type QueryDisaggregate_OptionArgs = {
  id: Scalars['ID'];
};


export type QueryDistrictArgs = {
  id: Scalars['ID'];
};


export type QueryDistrict_UserArgs = {
  district_user_id: Scalars['ID'];
};


export type QueryDistrict_UsersArgs = {
  catchment_district_id: Scalars['ID'];
};


export type QueryDistrictsArgs = {
  province_id: Scalars['ID'];
};


export type QueryIndicatorArgs = {
  id: Scalars['ID'];
};


export type QueryIndicator_DisaggregateArgs = {
  id: Scalars['ID'];
};


export type QueryIndicator_Disaggregate_ReportArgs = {
  id: Scalars['ID'];
};


export type QueryIndicator_Disaggregate_ReportsArgs = {
  report_id: Scalars['ID'];
};


export type QueryIndicator_DisaggregatesArgs = {
  organisation_indicator_id: Scalars['ID'];
};


export type QueryIndicator_UnitArgs = {
  id: Scalars['ID'];
};


export type QueryIsLoggedInArgs = {
  id: Scalars['ID'];
};


export type QueryOptionArgs = {
  id: Scalars['ID'];
};


export type QueryOrganisationArgs = {
  id: Scalars['ID'];
};


export type QueryOrganisation_IndicatorArgs = {
  id: Scalars['ID'];
};


export type QueryOrganisation_IndicatorsArgs = {
  organisation_id: Scalars['ID'];
};


export type QueryOrganisation_Report_TemplateArgs = {
  id: Scalars['ID'];
};


export type QueryOrganisation_Report_TemplatesArgs = {
  organisation_id: Scalars['ID'];
};


export type QueryOrganisation_ReportsArgs = {
  organisation_id: Scalars['ID'];
};


export type QueryOrganisation_UserArgs = {
  organisation_user_id: Scalars['ID'];
};


export type QueryOrganisation_UsersArgs = {
  organisation_id: Scalars['ID'];
};


export type QueryOrganisationsArgs = {
  country_id: Scalars['ID'];
};


export type QueryProvinceArgs = {
  id: Scalars['ID'];
};


export type QueryProvincesArgs = {
  country_id: Scalars['ID'];
};


export type QueryReportArgs = {
  id: Scalars['ID'];
};


export type QueryReport_TemplateArgs = {
  id: Scalars['ID'];
};


export type QueryResidenceArgs = {
  id: Scalars['ID'];
};


export type QueryResidencesArgs = {
  district_id: Scalars['ID'];
};


export type QueryService_AreaArgs = {
  id: Scalars['ID'];
};


export type QueryService_Area_Sewer_ConnectionArgs = {
  sewer_netowrk_id: Scalars['ID'];
  service_area_id: Scalars['ID'];
};


export type QueryService_Area_Sewer_ConnectionsArgs = {
  service_area_id: Scalars['ID'];
};


export type QueryService_Area_Water_ConnectionArgs = {
  water_netowrk_id: Scalars['ID'];
  service_area_id: Scalars['ID'];
};


export type QueryService_Area_Water_ConnectionsArgs = {
  service_area_id: Scalars['ID'];
};


export type QueryService_AreasArgs = {
  catchment_district_id: Scalars['ID'];
};


export type QuerySewer_NetworkArgs = {
  id: Scalars['ID'];
};


export type QuerySewer_NetworksArgs = {
  plant_id: Scalars['ID'];
};


export type QuerySewer_Treatment_PlantArgs = {
  id: Scalars['ID'];
};


export type QuerySewer_Treatment_PlantsArgs = {
  catchment_district_id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUser_InvitationArgs = {
  id: Scalars['ID'];
};


export type QueryUser_InvitationsArgs = {
  args: SearchUserInvitationsInput;
};


export type QueryWater_NetworkArgs = {
  id: Scalars['ID'];
};


export type QueryWater_NetworksArgs = {
  plant_id: Scalars['ID'];
};


export type QueryWater_Production_SiteArgs = {
  id: Scalars['ID'];
};


export type QueryWater_Production_SitesArgs = {
  plant_id: Scalars['ID'];
};


export type QueryWater_Storage_TankArgs = {
  id: Scalars['ID'];
};


export type QueryWater_Storage_TanksArgs = {
  plant_id: Scalars['ID'];
};


export type QueryWater_Treatment_PlantArgs = {
  id: Scalars['ID'];
};


export type QueryWater_Treatment_PlantsArgs = {
  catchment_district_id: Scalars['ID'];
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
  icon?: Maybe<Scalars['Byte']>;
  indicators?: Maybe<Array<Indicator>>;
  organisation_report_templates?: Maybe<Array<OrganisationReportTemplate>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type ReportTemplateResult = ReportTemplate | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type ReportTemplateUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<IndicatorType>;
  frequency?: InputMaybe<ReportingFrequency>;
  window?: InputMaybe<Scalars['Int']>;
  icon?: InputMaybe<Scalars['Byte']>;
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

export type SearchUserInvitationsInput = {
  email_addresses?: InputMaybe<Array<Scalars['EmailAddress']>>;
  organisation_id: Scalars['ID'];
  catchment_district_ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type SendInvitationEmailInput = {
  email: Scalars['String'];
  invitation_id: Scalars['String'];
  organisation_name: Scalars['String'];
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

export type SetUserDefaultDistrictInput = {
  district_user_id: Scalars['ID'];
  organisation_user_id: Scalars['ID'];
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

export type Subscription = {
  __typename?: 'Subscription';
  userInvitationUpdated: UserInvitation;
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

export type UpdateUserRolesForDistrictInput = {
  district_user_id: Scalars['ID'];
  new_roles: Array<DistrictUserRoleType>;
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
  disabled: Scalars['Boolean'];
  master_support: Scalars['Boolean'];
  user_organisations?: Maybe<Array<UserOrganisation>>;
  user_default_organisation?: Maybe<UserOrganisation>;
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

export type UserDistrict = {
  __typename?: 'UserDistrict';
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
  user_id: Scalars['ID'];
  user?: Maybe<User>;
  catchment_district_id: Scalars['ID'];
  organisation_id: Scalars['ID'];
  organisation?: Maybe<UserOrganisation>;
  is_default_user_district: Scalars['Boolean'];
  district_user_id: Scalars['ID'];
  disabled: Scalars['Boolean'];
  user_district_roles: Array<DistrictUserRoleType>;
  province_id: Scalars['String'];
  province?: Maybe<Province>;
  service_areas?: Maybe<Array<ServiceArea>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type UserDistrictResult = UserDistrict | ApiNotFoundError;

export type UserInvitation = {
  __typename?: 'UserInvitation';
  id: Scalars['ID'];
  ttl: Scalars['DateTime'];
  email: Scalars['EmailAddress'];
  organisation_id: Scalars['String'];
  catchment_district_ids?: Maybe<Array<Scalars['String']>>;
  invitation_token: Scalars['String'];
  email_status: EmailStatus;
};

export type UserInvitationResult = UserInvitation | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export type UserOrganisation = {
  __typename?: 'UserOrganisation';
  id: Scalars['ID'];
  name: Scalars['String'];
  logo?: Maybe<Scalars['Byte']>;
  user_id: Scalars['ID'];
  user?: Maybe<User>;
  is_user_default_organisation: Scalars['Boolean'];
  user_default_district?: Maybe<UserDistrict>;
  user_districts?: Maybe<Array<UserDistrict>>;
  user_organisation_role: OrganisationUserRoleType;
  country_id: Scalars['String'];
  country?: Maybe<Country>;
  catchment_provinces?: Maybe<Array<CatchmentProvinceView>>;
  users?: Maybe<Array<OrganisationUserView>>;
  organisation_report_templates?: Maybe<Array<OrganisationReportTemplateView>>;
  organisation_indicators?: Maybe<Array<OrganisationIndicatorView>>;
  reports?: Maybe<Array<Report>>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type UserOrganisationResult = UserOrganisation | ApiNotFoundError;

export type UserResult = User | ApiNotFoundError | ApiCreateError | ApiUpdateError | ApiDeleteError;

export enum UserTheme {
  Dark = 'DARK',
  Light = 'LIGHT'
}

export type UserUpdateInput = {
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<UserTheme>;
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

export type CreateUserInvitationMutationVariables = Exact<{
  input: CreateUserInvitationInput;
}>;


export type CreateUserInvitationMutation = { __typename?: 'Mutation', createUserInvitation: Array<{ __typename?: 'UserInvitation', id: string, catchment_district_ids?: Array<string> | null, email: any, invitation_token: string, organisation_id: string, ttl: any } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError', message: string, field?: string | null, value?: string | null } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' }> };

export type DeleteUserInvitationMutationVariables = Exact<{
  input: DeleteUserInvitationInput;
}>;


export type DeleteUserInvitationMutation = { __typename?: 'Mutation', deleteUserInvitation: { __typename?: 'UserInvitation', id: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError', message: string, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string }> | null } };

export type DisableUserMutationVariables = Exact<{
  input: DisableUserInput;
}>;


export type DisableUserMutation = { __typename?: 'Mutation', disableUser: { __typename?: 'User', id: string, disabled: boolean } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, disabled: boolean, user_organisations?: Array<{ __typename?: 'UserOrganisation', id: string, name: string, logo?: any | null, is_user_default_organisation: boolean, country?: { __typename?: 'Country', id: string, name: string } | null }> | null, user_default_organisation?: { __typename?: 'UserOrganisation', id: string, name: string, logo?: any | null, is_user_default_organisation: boolean, users?: Array<{ __typename?: 'OrganisationUserView', id: string, first_name: string, last_name: string, email: string, disabled: boolean, master_support: boolean, organisation_id: string, organisation_user_id: string, role: OrganisationUserRoleType, hashed_confirmation_token?: string | null, confirmed_at?: any | null, hashed_password_reset_token?: string | null, last_login?: any | null, theme: UserTheme }> | null, user_districts?: Array<{ __typename?: 'UserDistrict', id: string, name: string, code: string, is_default_user_district: boolean, catchment_district_id: string, province?: { __typename?: 'Province', id: string, name: string, code: string } | null }> | null, catchment_provinces?: Array<{ __typename?: 'CatchmentProvinceView', id: string, code: string, name: string, disabled: boolean, catchment_districts?: Array<{ __typename?: 'CatchmentDistrictView', id: string, name: string, code: string, disabled: boolean, catchment_district_id: string, catchment_province_id: string }> | null }> | null, country?: { __typename?: 'Country', code: string, name: string, flag?: any | null } | null } | null } | { __typename?: 'ApiNotFoundError', message: string } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type GetDefaultOrganisationUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDefaultOrganisationUsersQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, user_default_organisation?: { __typename?: 'UserOrganisation', id: string, users?: Array<{ __typename?: 'OrganisationUserView', id: string, organisation_user_id: string, last_name: string, first_name: string, email: string, master_support: boolean, disabled: boolean, role: OrganisationUserRoleType, theme: UserTheme, user_districts?: Array<{ __typename?: 'UserDistrict', id: string, code: string, name: string, disabled: boolean, is_default_user_district: boolean, district_user_id: string, catchment_district_id: string, user_district_roles: Array<DistrictUserRoleType>, province?: { __typename?: 'Province', id: string, name: string } | null }> | null }> | null } | null } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type GetUserInvitationsQueryVariables = Exact<{
  args: SearchUserInvitationsInput;
}>;


export type GetUserInvitationsQuery = { __typename?: 'Query', user_invitations?: Array<{ __typename?: 'UserInvitation', id: string, organisation_id: string, email: any, catchment_district_ids?: Array<string> | null, invitation_token: string, ttl: any, email_status: EmailStatus }> | null };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginSuccess', accessToken: any, id: string } | { __typename?: 'ApiLoginError', message: string, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string }> | null } };

export type OnUserInvitationUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnUserInvitationUpdatedSubscription = { __typename?: 'Subscription', userInvitationUpdated: { __typename?: 'UserInvitation', id: string, email_status: EmailStatus } };

export type SendUserInvitationEmailMutationVariables = Exact<{
  input: SendInvitationEmailInput;
}>;


export type SendUserInvitationEmailMutation = { __typename?: 'Mutation', sendUserInvitationEmail?: any | null };

export type UpdateUserOrganisationRoleMutationVariables = Exact<{
  input: UpdateOrganisationUserInput;
}>;


export type UpdateUserOrganisationRoleMutation = { __typename?: 'Mutation', updateOrganisationUser: { __typename?: 'OrganisationUser', id: string, role: OrganisationUserRoleType } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type UpdateUserRolesForDistrictMutationVariables = Exact<{
  input: UpdateUserRolesForDistrictInput;
}>;


export type UpdateUserRolesForDistrictMutation = { __typename?: 'Mutation', updateUserRolesForDistrict: { __typename?: 'DistrictUser', id: string, roles: Array<DistrictUserRoleType> } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };


export const CreateUserInvitationDocument = gql`
    mutation CreateUserInvitation($input: CreateUserInvitationInput!) {
  createUserInvitation(input: $input) {
    ... on UserInvitation {
      id
      catchment_district_ids
      email
      invitation_token
      organisation_id
      ttl
    }
    ... on ApiCreateError {
      message
      field
      value
    }
  }
}
    `;
export type CreateUserInvitationMutationFn = Apollo.MutationFunction<CreateUserInvitationMutation, CreateUserInvitationMutationVariables>;

/**
 * __useCreateUserInvitationMutation__
 *
 * To run a mutation, you first call `useCreateUserInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserInvitationMutation, { data, loading, error }] = useCreateUserInvitationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserInvitationMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserInvitationMutation, CreateUserInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserInvitationMutation, CreateUserInvitationMutationVariables>(CreateUserInvitationDocument, options);
      }
export type CreateUserInvitationMutationHookResult = ReturnType<typeof useCreateUserInvitationMutation>;
export type CreateUserInvitationMutationResult = Apollo.MutationResult<CreateUserInvitationMutation>;
export type CreateUserInvitationMutationOptions = Apollo.BaseMutationOptions<CreateUserInvitationMutation, CreateUserInvitationMutationVariables>;
export const DeleteUserInvitationDocument = gql`
    mutation DeleteUserInvitation($input: DeleteUserInvitationInput!) {
  deleteUserInvitation(input: $input) {
    ... on UserInvitation {
      id
    }
    ... on ApiDeleteError {
      message
      errors {
        field
        message
      }
    }
  }
}
    `;
export type DeleteUserInvitationMutationFn = Apollo.MutationFunction<DeleteUserInvitationMutation, DeleteUserInvitationMutationVariables>;

/**
 * __useDeleteUserInvitationMutation__
 *
 * To run a mutation, you first call `useDeleteUserInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserInvitationMutation, { data, loading, error }] = useDeleteUserInvitationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserInvitationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserInvitationMutation, DeleteUserInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserInvitationMutation, DeleteUserInvitationMutationVariables>(DeleteUserInvitationDocument, options);
      }
export type DeleteUserInvitationMutationHookResult = ReturnType<typeof useDeleteUserInvitationMutation>;
export type DeleteUserInvitationMutationResult = Apollo.MutationResult<DeleteUserInvitationMutation>;
export type DeleteUserInvitationMutationOptions = Apollo.BaseMutationOptions<DeleteUserInvitationMutation, DeleteUserInvitationMutationVariables>;
export const DisableUserDocument = gql`
    mutation DisableUser($input: DisableUserInput!) {
  disableUser(input: $input) {
    ... on User {
      id
      disabled
    }
  }
}
    `;
export type DisableUserMutationFn = Apollo.MutationFunction<DisableUserMutation, DisableUserMutationVariables>;

/**
 * __useDisableUserMutation__
 *
 * To run a mutation, you first call `useDisableUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisableUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disableUserMutation, { data, loading, error }] = useDisableUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDisableUserMutation(baseOptions?: Apollo.MutationHookOptions<DisableUserMutation, DisableUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DisableUserMutation, DisableUserMutationVariables>(DisableUserDocument, options);
      }
export type DisableUserMutationHookResult = ReturnType<typeof useDisableUserMutation>;
export type DisableUserMutationResult = Apollo.MutationResult<DisableUserMutation>;
export type DisableUserMutationOptions = Apollo.BaseMutationOptions<DisableUserMutation, DisableUserMutationVariables>;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  me {
    ... on ApiNotFoundError {
      message
    }
    ... on User {
      id
      first_name
      last_name
      email
      disabled
      user_organisations {
        id
        name
        logo
        is_user_default_organisation
        country {
          id
          name
        }
      }
      user_default_organisation {
        id
        name
        logo
        is_user_default_organisation
        users {
          id
          first_name
          last_name
          email
          disabled
          master_support
          organisation_id
          organisation_user_id
          role
          hashed_confirmation_token
          confirmed_at
          hashed_password_reset_token
          last_login
          theme
        }
        user_districts {
          id
          name
          code
          is_default_user_district
          catchment_district_id
          province {
            id
            name
            code
          }
        }
        catchment_provinces {
          id
          code
          name
          disabled
          catchment_districts {
            id
            name
            code
            disabled
            catchment_district_id
            catchment_province_id
          }
        }
        country {
          code
          name
          flag
        }
      }
    }
  }
}
    `;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetDefaultOrganisationUsersDocument = gql`
    query GetDefaultOrganisationUsers {
  me {
    ... on User {
      id
      user_default_organisation {
        id
        users {
          id
          organisation_user_id
          last_name
          first_name
          email
          master_support
          disabled
          role
          theme
          user_districts {
            id
            code
            name
            disabled
            is_default_user_district
            district_user_id
            catchment_district_id
            user_district_roles
            province {
              id
              name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetDefaultOrganisationUsersQuery__
 *
 * To run a query within a React component, call `useGetDefaultOrganisationUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDefaultOrganisationUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDefaultOrganisationUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDefaultOrganisationUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetDefaultOrganisationUsersQuery, GetDefaultOrganisationUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDefaultOrganisationUsersQuery, GetDefaultOrganisationUsersQueryVariables>(GetDefaultOrganisationUsersDocument, options);
      }
export function useGetDefaultOrganisationUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDefaultOrganisationUsersQuery, GetDefaultOrganisationUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDefaultOrganisationUsersQuery, GetDefaultOrganisationUsersQueryVariables>(GetDefaultOrganisationUsersDocument, options);
        }
export type GetDefaultOrganisationUsersQueryHookResult = ReturnType<typeof useGetDefaultOrganisationUsersQuery>;
export type GetDefaultOrganisationUsersLazyQueryHookResult = ReturnType<typeof useGetDefaultOrganisationUsersLazyQuery>;
export type GetDefaultOrganisationUsersQueryResult = Apollo.QueryResult<GetDefaultOrganisationUsersQuery, GetDefaultOrganisationUsersQueryVariables>;
export const GetUserInvitationsDocument = gql`
    query getUserInvitations($args: SearchUserInvitationsInput!) {
  user_invitations(args: $args) {
    ... on UserInvitation {
      id
      organisation_id
      email
      catchment_district_ids
      invitation_token
      ttl
      email_status
    }
  }
}
    `;

/**
 * __useGetUserInvitationsQuery__
 *
 * To run a query within a React component, call `useGetUserInvitationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInvitationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInvitationsQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGetUserInvitationsQuery(baseOptions: Apollo.QueryHookOptions<GetUserInvitationsQuery, GetUserInvitationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserInvitationsQuery, GetUserInvitationsQueryVariables>(GetUserInvitationsDocument, options);
      }
export function useGetUserInvitationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInvitationsQuery, GetUserInvitationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserInvitationsQuery, GetUserInvitationsQueryVariables>(GetUserInvitationsDocument, options);
        }
export type GetUserInvitationsQueryHookResult = ReturnType<typeof useGetUserInvitationsQuery>;
export type GetUserInvitationsLazyQueryHookResult = ReturnType<typeof useGetUserInvitationsLazyQuery>;
export type GetUserInvitationsQueryResult = Apollo.QueryResult<GetUserInvitationsQuery, GetUserInvitationsQueryVariables>;
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
      id
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
export const OnUserInvitationUpdatedDocument = gql`
    subscription OnUserInvitationUpdated {
  userInvitationUpdated {
    id
    email_status
  }
}
    `;

/**
 * __useOnUserInvitationUpdatedSubscription__
 *
 * To run a query within a React component, call `useOnUserInvitationUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUserInvitationUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUserInvitationUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnUserInvitationUpdatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnUserInvitationUpdatedSubscription, OnUserInvitationUpdatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnUserInvitationUpdatedSubscription, OnUserInvitationUpdatedSubscriptionVariables>(OnUserInvitationUpdatedDocument, options);
      }
export type OnUserInvitationUpdatedSubscriptionHookResult = ReturnType<typeof useOnUserInvitationUpdatedSubscription>;
export type OnUserInvitationUpdatedSubscriptionResult = Apollo.SubscriptionResult<OnUserInvitationUpdatedSubscription>;
export const SendUserInvitationEmailDocument = gql`
    mutation SendUserInvitationEmail($input: SendInvitationEmailInput!) {
  sendUserInvitationEmail(input: $input)
}
    `;
export type SendUserInvitationEmailMutationFn = Apollo.MutationFunction<SendUserInvitationEmailMutation, SendUserInvitationEmailMutationVariables>;

/**
 * __useSendUserInvitationEmailMutation__
 *
 * To run a mutation, you first call `useSendUserInvitationEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendUserInvitationEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendUserInvitationEmailMutation, { data, loading, error }] = useSendUserInvitationEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendUserInvitationEmailMutation(baseOptions?: Apollo.MutationHookOptions<SendUserInvitationEmailMutation, SendUserInvitationEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendUserInvitationEmailMutation, SendUserInvitationEmailMutationVariables>(SendUserInvitationEmailDocument, options);
      }
export type SendUserInvitationEmailMutationHookResult = ReturnType<typeof useSendUserInvitationEmailMutation>;
export type SendUserInvitationEmailMutationResult = Apollo.MutationResult<SendUserInvitationEmailMutation>;
export type SendUserInvitationEmailMutationOptions = Apollo.BaseMutationOptions<SendUserInvitationEmailMutation, SendUserInvitationEmailMutationVariables>;
export const UpdateUserOrganisationRoleDocument = gql`
    mutation UpdateUserOrganisationRole($input: UpdateOrganisationUserInput!) {
  updateOrganisationUser(input: $input) {
    ... on OrganisationUser {
      id
      role
    }
  }
}
    `;
export type UpdateUserOrganisationRoleMutationFn = Apollo.MutationFunction<UpdateUserOrganisationRoleMutation, UpdateUserOrganisationRoleMutationVariables>;

/**
 * __useUpdateUserOrganisationRoleMutation__
 *
 * To run a mutation, you first call `useUpdateUserOrganisationRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserOrganisationRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserOrganisationRoleMutation, { data, loading, error }] = useUpdateUserOrganisationRoleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserOrganisationRoleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserOrganisationRoleMutation, UpdateUserOrganisationRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserOrganisationRoleMutation, UpdateUserOrganisationRoleMutationVariables>(UpdateUserOrganisationRoleDocument, options);
      }
export type UpdateUserOrganisationRoleMutationHookResult = ReturnType<typeof useUpdateUserOrganisationRoleMutation>;
export type UpdateUserOrganisationRoleMutationResult = Apollo.MutationResult<UpdateUserOrganisationRoleMutation>;
export type UpdateUserOrganisationRoleMutationOptions = Apollo.BaseMutationOptions<UpdateUserOrganisationRoleMutation, UpdateUserOrganisationRoleMutationVariables>;
export const UpdateUserRolesForDistrictDocument = gql`
    mutation UpdateUserRolesForDistrict($input: UpdateUserRolesForDistrictInput!) {
  updateUserRolesForDistrict(input: $input) {
    ... on DistrictUser {
      id
      roles
    }
  }
}
    `;
export type UpdateUserRolesForDistrictMutationFn = Apollo.MutationFunction<UpdateUserRolesForDistrictMutation, UpdateUserRolesForDistrictMutationVariables>;

/**
 * __useUpdateUserRolesForDistrictMutation__
 *
 * To run a mutation, you first call `useUpdateUserRolesForDistrictMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserRolesForDistrictMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserRolesForDistrictMutation, { data, loading, error }] = useUpdateUserRolesForDistrictMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserRolesForDistrictMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserRolesForDistrictMutation, UpdateUserRolesForDistrictMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserRolesForDistrictMutation, UpdateUserRolesForDistrictMutationVariables>(UpdateUserRolesForDistrictDocument, options);
      }
export type UpdateUserRolesForDistrictMutationHookResult = ReturnType<typeof useUpdateUserRolesForDistrictMutation>;
export type UpdateUserRolesForDistrictMutationResult = Apollo.MutationResult<UpdateUserRolesForDistrictMutation>;
export type UpdateUserRolesForDistrictMutationOptions = Apollo.BaseMutationOptions<UpdateUserRolesForDistrictMutation, UpdateUserRolesForDistrictMutationVariables>;
export type ApiBatchPayloadKeySpecifier = ('count' | ApiBatchPayloadKeySpecifier)[];
export type ApiBatchPayloadFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiCreateErrorKeySpecifier = ('message' | 'field' | 'value' | 'errors' | ApiCreateErrorKeySpecifier)[];
export type ApiCreateErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiDeleteErrorKeySpecifier = ('message' | 'errors' | ApiDeleteErrorKeySpecifier)[];
export type ApiDeleteErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiErrorKeySpecifier = ('message' | ApiErrorKeySpecifier)[];
export type ApiErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiLoginErrorKeySpecifier = ('message' | 'errors' | ApiLoginErrorKeySpecifier)[];
export type ApiLoginErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiNotFoundErrorKeySpecifier = ('message' | 'errors' | ApiNotFoundErrorKeySpecifier)[];
export type ApiNotFoundErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiOperationErrorKeySpecifier = ('message' | 'errors' | ApiOperationErrorKeySpecifier)[];
export type ApiOperationErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiPasswordResetErrorKeySpecifier = ('message' | 'errors' | ApiPasswordResetErrorKeySpecifier)[];
export type ApiPasswordResetErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiUpdateErrorKeySpecifier = ('message' | 'errors' | ApiUpdateErrorKeySpecifier)[];
export type ApiUpdateErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CatchmentDistrictKeySpecifier = ('id' | 'disabled' | 'district_id' | 'district' | 'catchment_province_id' | 'catchment_province' | 'water_treatment_plants' | 'service_areas' | 'sewer_treatment_plants' | 'reports' | 'district_users' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | CatchmentDistrictKeySpecifier)[];
export type CatchmentDistrictFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	district_id?: FieldPolicy<any> | FieldReadFunction<any>,
	district?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_province_id?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_province?: FieldPolicy<any> | FieldReadFunction<any>,
	water_treatment_plants?: FieldPolicy<any> | FieldReadFunction<any>,
	service_areas?: FieldPolicy<any> | FieldReadFunction<any>,
	sewer_treatment_plants?: FieldPolicy<any> | FieldReadFunction<any>,
	reports?: FieldPolicy<any> | FieldReadFunction<any>,
	district_users?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CatchmentDistrictViewKeySpecifier = ('id' | 'name' | 'code' | 'province_id' | 'province' | 'organisations_in_district' | 'residences' | 'disabled' | 'catchment_district_id' | 'catchment_province_id' | 'catchment_province' | 'water_treatment_plants' | 'service_areas' | 'sewer_treatment_plants' | 'reports' | 'district_users' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | CatchmentDistrictViewKeySpecifier)[];
export type CatchmentDistrictViewFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	province_id?: FieldPolicy<any> | FieldReadFunction<any>,
	province?: FieldPolicy<any> | FieldReadFunction<any>,
	organisations_in_district?: FieldPolicy<any> | FieldReadFunction<any>,
	residences?: FieldPolicy<any> | FieldReadFunction<any>,
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_district_id?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_province_id?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_province?: FieldPolicy<any> | FieldReadFunction<any>,
	water_treatment_plants?: FieldPolicy<any> | FieldReadFunction<any>,
	service_areas?: FieldPolicy<any> | FieldReadFunction<any>,
	sewer_treatment_plants?: FieldPolicy<any> | FieldReadFunction<any>,
	reports?: FieldPolicy<any> | FieldReadFunction<any>,
	district_users?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CatchmentProvinceKeySpecifier = ('id' | 'disabled' | 'province_id' | 'province' | 'organisation_id' | 'organisation' | 'catchment_districts' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | CatchmentProvinceKeySpecifier)[];
export type CatchmentProvinceFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	province_id?: FieldPolicy<any> | FieldReadFunction<any>,
	province?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_districts?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CatchmentProvinceViewKeySpecifier = ('id' | 'code' | 'name' | 'disabled' | 'catchment_province_id' | 'organisation_id' | 'organisation' | 'catchment_districts' | 'country_id' | 'country' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | CatchmentProvinceViewKeySpecifier)[];
export type CatchmentProvinceViewFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_province_id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_districts?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountryKeySpecifier = ('id' | 'code' | 'name' | 'flag' | 'provinces' | 'organisations' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | CountryKeySpecifier)[];
export type CountryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	flag?: FieldPolicy<any> | FieldReadFunction<any>,
	provinces?: FieldPolicy<any> | FieldReadFunction<any>,
	organisations?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateOrganisationIndicatorsSuccessKeySpecifier = ('organisation_indicators' | CreateOrganisationIndicatorsSuccessKeySpecifier)[];
export type CreateOrganisationIndicatorsSuccessFieldPolicy = {
	organisation_indicators?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSewerTreatmentPlantPayloadKeySpecifier = ('sewer_treatment_plant' | CreateSewerTreatmentPlantPayloadKeySpecifier)[];
export type CreateSewerTreatmentPlantPayloadFieldPolicy = {
	sewer_treatment_plant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateWaterProductionSitePayloadKeySpecifier = ('water_production_site' | CreateWaterProductionSitePayloadKeySpecifier)[];
export type CreateWaterProductionSitePayloadFieldPolicy = {
	water_production_site?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateWaterStorageTankPayloadKeySpecifier = ('water_storage_tank' | CreateWaterStorageTankPayloadKeySpecifier)[];
export type CreateWaterStorageTankPayloadFieldPolicy = {
	water_storage_tank?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateWaterTreatmentPlantPayloadKeySpecifier = ('water_treatment_plant' | CreateWaterTreatmentPlantPayloadKeySpecifier)[];
export type CreateWaterTreatmentPlantPayloadFieldPolicy = {
	water_treatment_plant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteWaterProductionSitePayloadKeySpecifier = ('water_production_site' | DeleteWaterProductionSitePayloadKeySpecifier)[];
export type DeleteWaterProductionSitePayloadFieldPolicy = {
	water_production_site?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteWaterStorageTankPayloadKeySpecifier = ('water_storage_tank' | DeleteWaterStorageTankPayloadKeySpecifier)[];
export type DeleteWaterStorageTankPayloadFieldPolicy = {
	water_storage_tank?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DisaggregateKeySpecifier = ('id' | 'name' | 'type' | 'disaggregate_options' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | DisaggregateKeySpecifier)[];
export type DisaggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	disaggregate_options?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DisaggregateOptionKeySpecifier = ('id' | 'option_id' | 'option' | 'disaggregate_id' | 'disaggregate' | 'indicator_disaggregates' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | DisaggregateOptionKeySpecifier)[];
export type DisaggregateOptionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	option?: FieldPolicy<any> | FieldReadFunction<any>,
	disaggregate_id?: FieldPolicy<any> | FieldReadFunction<any>,
	disaggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_disaggregates?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DistrictKeySpecifier = ('id' | 'name' | 'code' | 'province_id' | 'province' | 'organisations_in_district' | 'residences' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | DistrictKeySpecifier)[];
export type DistrictFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	province_id?: FieldPolicy<any> | FieldReadFunction<any>,
	province?: FieldPolicy<any> | FieldReadFunction<any>,
	organisations_in_district?: FieldPolicy<any> | FieldReadFunction<any>,
	residences?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DistrictUserKeySpecifier = ('id' | 'organisation_user_id' | 'organisation_user' | 'catchment_district_id' | 'catchment_district' | 'is_default_user_district' | 'roles' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | DistrictUserKeySpecifier)[];
export type DistrictUserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_user?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_district_id?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_district?: FieldPolicy<any> | FieldReadFunction<any>,
	is_default_user_district?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorFieldKeySpecifier = ('field' | 'message' | 'value' | ErrorFieldKeySpecifier)[];
export type ErrorFieldFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IndicatorKeySpecifier = ('id' | 'indicator_number' | 'description' | 'category' | 'type' | 'contributing_organisation' | 'report_template_id' | 'report_template' | 'indicator_unit_id' | 'indicator_unit' | 'indicator_organisations' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | IndicatorKeySpecifier)[];
export type IndicatorFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_number?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	contributing_organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	report_template_id?: FieldPolicy<any> | FieldReadFunction<any>,
	report_template?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_unit_id?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_unit?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_organisations?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IndicatorDisaggregateKeySpecifier = ('id' | 'organisation_indicator_id' | 'organisation_indicator' | 'disaggregate_option_id' | 'disaggregate_option' | 'indicator_disaggregate_reports' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | IndicatorDisaggregateKeySpecifier)[];
export type IndicatorDisaggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_indicator_id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_indicator?: FieldPolicy<any> | FieldReadFunction<any>,
	disaggregate_option_id?: FieldPolicy<any> | FieldReadFunction<any>,
	disaggregate_option?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_disaggregate_reports?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IndicatorDisaggregateReportKeySpecifier = ('id' | 'target' | 'achieved' | 'comment' | 'report_id' | 'report' | 'indicator_disaggregate_id' | 'indicator_disaggregate' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | IndicatorDisaggregateReportKeySpecifier)[];
export type IndicatorDisaggregateReportFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	achieved?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	report_id?: FieldPolicy<any> | FieldReadFunction<any>,
	report?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_disaggregate_id?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_disaggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IndicatorUnitKeySpecifier = ('id' | 'unit' | 'display_name' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | IndicatorUnitKeySpecifier)[];
export type IndicatorUnitFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	unit?: FieldPolicy<any> | FieldReadFunction<any>,
	display_name?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginSuccessKeySpecifier = ('accessToken' | 'id' | LoginSuccessKeySpecifier)[];
export type LoginSuccessFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createCountry' | 'deleteCountry' | 'updateCountry' | 'createProvince' | 'deleteProvince' | 'updateProvince' | 'createDistrict' | 'updateDistrict' | 'deleteDistrict' | 'createOrganisation' | 'updateOrganisation' | 'deleteOrganisation' | 'createCatchmentProvince' | 'updateCatchmentProvince' | 'deleteCatchmentProvince' | 'createCatchmentDistrict' | 'updateCatchmentDistrict' | 'deleteCatchmentDistrict' | 'createUser' | 'createInvitedUser' | 'deleteUser' | 'disableUser' | 'updateUser' | 'login' | 'requestPasswordReset' | 'resetPassword' | 'createOrganisationUser' | 'updateOrganisationUser' | 'setUserDefaultProject' | 'deleteOrganisationUser' | 'createDistrictUser' | 'setUserDefaultDistrict' | 'updateUserRolesForDistrict' | 'deleteDistrictUser' | 'createUserInvitation' | 'sendUserInvitationEmail' | 'deleteUserInvitation' | 'createResidence' | 'updateResidence' | 'deleteResidence' | 'createServiceArea' | 'deleteServiceArea' | 'createWaterTreatmentPlant' | 'updateWaterTreatmentPlant' | 'deleteWaterTreatmentPlants' | 'createWaterStorageTank' | 'updateWaterStorageTank' | 'deleteWaterStorageTank' | 'createWaterProductionSite' | 'updateWaterProductionSite' | 'deleteWaterProductionSite' | 'createWaterNetwork' | 'updateWaterNetwork' | 'deleteWaterNetwork' | 'createServiceAreaWaterConnection' | 'updateServiceAreaWaterConnection' | 'deleteServiceAreaWaterConnection' | 'createSewerTreatmentPlant' | 'updateSewerTreatmentPlant' | 'deleteSewerTreatmentPlants' | 'createSewerNetwork' | 'updateSewerNetwork' | 'deleteSewerNetwork' | 'createServiceAreaSewerConnection' | 'updateServiceAreaSewerConnection' | 'deleteServiceAreaSewerConnection' | 'createDisaggregateOption' | 'createDisaggregateOptions' | 'deleteDisaggregateOption' | 'createDisaggregate' | 'createDisaggregateWithOptions' | 'updateDisaggregate' | 'deleteDisaggregate' | 'createIndicatorUnit' | 'updateIndicatorUnit' | 'deleteIndicatorUnit' | 'createIndicator' | 'updateIndicator' | 'deleteIndicator' | 'createReport' | 'updateReport' | 'deleteReport' | 'createOrganisationReportTemplate' | 'createOrganisationReportTemplates' | 'deleteOrganisationReportTemplate' | 'createReportTemplate' | 'updateReportTemplate' | 'deleteReportTemplate' | 'createOrganisationIndicator' | 'createOrganisationIndicators' | 'deleteOrganisationIndicator' | 'createIndicatorDisaggregate' | 'createIndicatorDisaggregates' | 'deleteIndicatorDisaggregate' | 'createOption' | 'updateOption' | 'deleteOption' | 'createIndicatorDisaggregateReport' | 'updateIndicatorDisaggregateReport' | 'deleteIndicatorDisaggregateReport' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createCountry?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCountry?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCountry?: FieldPolicy<any> | FieldReadFunction<any>,
	createProvince?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProvince?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProvince?: FieldPolicy<any> | FieldReadFunction<any>,
	createDistrict?: FieldPolicy<any> | FieldReadFunction<any>,
	updateDistrict?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDistrict?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrganisation?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrganisation?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrganisation?: FieldPolicy<any> | FieldReadFunction<any>,
	createCatchmentProvince?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCatchmentProvince?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCatchmentProvince?: FieldPolicy<any> | FieldReadFunction<any>,
	createCatchmentDistrict?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCatchmentDistrict?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCatchmentDistrict?: FieldPolicy<any> | FieldReadFunction<any>,
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createInvitedUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	disableUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	requestPasswordReset?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrganisationUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOrganisationUser?: FieldPolicy<any> | FieldReadFunction<any>,
	setUserDefaultProject?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrganisationUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createDistrictUser?: FieldPolicy<any> | FieldReadFunction<any>,
	setUserDefaultDistrict?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUserRolesForDistrict?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDistrictUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createUserInvitation?: FieldPolicy<any> | FieldReadFunction<any>,
	sendUserInvitationEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUserInvitation?: FieldPolicy<any> | FieldReadFunction<any>,
	createResidence?: FieldPolicy<any> | FieldReadFunction<any>,
	updateResidence?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteResidence?: FieldPolicy<any> | FieldReadFunction<any>,
	createServiceArea?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteServiceArea?: FieldPolicy<any> | FieldReadFunction<any>,
	createWaterTreatmentPlant?: FieldPolicy<any> | FieldReadFunction<any>,
	updateWaterTreatmentPlant?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteWaterTreatmentPlants?: FieldPolicy<any> | FieldReadFunction<any>,
	createWaterStorageTank?: FieldPolicy<any> | FieldReadFunction<any>,
	updateWaterStorageTank?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteWaterStorageTank?: FieldPolicy<any> | FieldReadFunction<any>,
	createWaterProductionSite?: FieldPolicy<any> | FieldReadFunction<any>,
	updateWaterProductionSite?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteWaterProductionSite?: FieldPolicy<any> | FieldReadFunction<any>,
	createWaterNetwork?: FieldPolicy<any> | FieldReadFunction<any>,
	updateWaterNetwork?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteWaterNetwork?: FieldPolicy<any> | FieldReadFunction<any>,
	createServiceAreaWaterConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateServiceAreaWaterConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteServiceAreaWaterConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	createSewerTreatmentPlant?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSewerTreatmentPlant?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSewerTreatmentPlants?: FieldPolicy<any> | FieldReadFunction<any>,
	createSewerNetwork?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSewerNetwork?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSewerNetwork?: FieldPolicy<any> | FieldReadFunction<any>,
	createServiceAreaSewerConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateServiceAreaSewerConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteServiceAreaSewerConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	createDisaggregateOption?: FieldPolicy<any> | FieldReadFunction<any>,
	createDisaggregateOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDisaggregateOption?: FieldPolicy<any> | FieldReadFunction<any>,
	createDisaggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	createDisaggregateWithOptions?: FieldPolicy<any> | FieldReadFunction<any>,
	updateDisaggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDisaggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	createIndicatorUnit?: FieldPolicy<any> | FieldReadFunction<any>,
	updateIndicatorUnit?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteIndicatorUnit?: FieldPolicy<any> | FieldReadFunction<any>,
	createIndicator?: FieldPolicy<any> | FieldReadFunction<any>,
	updateIndicator?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteIndicator?: FieldPolicy<any> | FieldReadFunction<any>,
	createReport?: FieldPolicy<any> | FieldReadFunction<any>,
	updateReport?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteReport?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrganisationReportTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrganisationReportTemplates?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrganisationReportTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	createReportTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	updateReportTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteReportTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrganisationIndicator?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrganisationIndicators?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOrganisationIndicator?: FieldPolicy<any> | FieldReadFunction<any>,
	createIndicatorDisaggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	createIndicatorDisaggregates?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteIndicatorDisaggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	createOption?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOption?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOption?: FieldPolicy<any> | FieldReadFunction<any>,
	createIndicatorDisaggregateReport?: FieldPolicy<any> | FieldReadFunction<any>,
	updateIndicatorDisaggregateReport?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteIndicatorDisaggregateReport?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OptionKeySpecifier = ('id' | 'option_name' | 'disaggregate_options' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | OptionKeySpecifier)[];
export type OptionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	option_name?: FieldPolicy<any> | FieldReadFunction<any>,
	disaggregate_options?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganisationKeySpecifier = ('id' | 'name' | 'logo' | 'allow_master_support' | 'country_id' | 'country' | 'catchment_provinces' | 'users' | 'organisation_report_templates' | 'organisation_indicators' | 'reports' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | OrganisationKeySpecifier)[];
export type OrganisationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	allow_master_support?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_provinces?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_report_templates?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_indicators?: FieldPolicy<any> | FieldReadFunction<any>,
	reports?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganisationIndicatorKeySpecifier = ('id' | 'indicator_id' | 'indicator' | 'organisation_id' | 'organisation' | 'indicator_disaggregates' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | OrganisationIndicatorKeySpecifier)[];
export type OrganisationIndicatorFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_id?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_disaggregates?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganisationIndicatorViewKeySpecifier = ('id' | 'indicator_number' | 'description' | 'category' | 'type' | 'contributing_organisation' | 'indicator_disaggregates' | 'report_template_id' | 'report_template' | 'indicator_unit_id' | 'indicator_unit' | 'organisation_id' | 'organisation' | 'indicator_organisations' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | OrganisationIndicatorViewKeySpecifier)[];
export type OrganisationIndicatorViewFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_number?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	contributing_organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_disaggregates?: FieldPolicy<any> | FieldReadFunction<any>,
	report_template_id?: FieldPolicy<any> | FieldReadFunction<any>,
	report_template?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_unit_id?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_unit?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_organisations?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganisationReportTemplateKeySpecifier = ('id' | 'report_template_id' | 'report_template' | 'organisation_id' | 'organisation' | 'reports' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | OrganisationReportTemplateKeySpecifier)[];
export type OrganisationReportTemplateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	report_template_id?: FieldPolicy<any> | FieldReadFunction<any>,
	report_template?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	reports?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganisationReportTemplateViewKeySpecifier = ('id' | 'name' | 'type' | 'frequency' | 'window' | 'icon' | 'indicators' | 'organisation_id' | 'organisation' | 'reports' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | OrganisationReportTemplateViewKeySpecifier)[];
export type OrganisationReportTemplateViewFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	frequency?: FieldPolicy<any> | FieldReadFunction<any>,
	window?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	indicators?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	reports?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganisationUserKeySpecifier = ('id' | 'user_id' | 'user' | 'organisation_id' | 'organisation' | 'is_default_organisation' | 'default_district' | 'role' | 'district_roles' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | OrganisationUserKeySpecifier)[];
export type OrganisationUserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	is_default_organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	default_district?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	district_roles?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganisationUserViewKeySpecifier = ('id' | 'first_name' | 'last_name' | 'email' | 'disabled' | 'master_support' | 'organisation_id' | 'organisation' | 'organisation_user_id' | 'role' | 'user_organisations' | 'user_districts' | 'hashed_confirmation_token' | 'confirmed_at' | 'hashed_password_reset_token' | 'last_login' | 'theme' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | OrganisationUserViewKeySpecifier)[];
export type OrganisationUserViewFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	master_support?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	user_organisations?: FieldPolicy<any> | FieldReadFunction<any>,
	user_districts?: FieldPolicy<any> | FieldReadFunction<any>,
	hashed_confirmation_token?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmed_at?: FieldPolicy<any> | FieldReadFunction<any>,
	hashed_password_reset_token?: FieldPolicy<any> | FieldReadFunction<any>,
	last_login?: FieldPolicy<any> | FieldReadFunction<any>,
	theme?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PasswordResetRequestPayloadKeySpecifier = ('hashed_password_reset_token' | PasswordResetRequestPayloadKeySpecifier)[];
export type PasswordResetRequestPayloadFieldPolicy = {
	hashed_password_reset_token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProvinceKeySpecifier = ('id' | 'code' | 'name' | 'country_id' | 'country' | 'districts' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | ProvinceKeySpecifier)[];
export type ProvinceFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	districts?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('catchment_district' | 'catchment_districts' | 'catchment_province' | 'catchment_provinces' | 'countries' | 'country' | 'default_user_district' | 'default_user_organisation' | 'disaggregate' | 'disaggregate_option' | 'disaggregate_options' | 'disaggregates' | 'district' | 'district_user' | 'district_users' | 'districts' | 'indicator' | 'indicator_disaggregate' | 'indicator_disaggregate_report' | 'indicator_disaggregate_reports' | 'indicator_disaggregates' | 'indicator_unit' | 'indicator_units' | 'indicators' | 'isLoggedIn' | 'me' | 'option' | 'options' | 'organisation' | 'organisation_indicator' | 'organisation_indicators' | 'organisation_report_template' | 'organisation_report_templates' | 'organisation_reports' | 'organisation_user' | 'organisation_users' | 'organisations' | 'province' | 'provinces' | 'report' | 'report_template' | 'report_templates' | 'reports' | 'residence' | 'residences' | 'service_area' | 'service_area_sewer_connection' | 'service_area_sewer_connections' | 'service_area_water_connection' | 'service_area_water_connections' | 'service_areas' | 'sewer_network' | 'sewer_networks' | 'sewer_treatment_plant' | 'sewer_treatment_plants' | 'user' | 'user_invitation' | 'user_invitations' | 'users' | 'water_network' | 'water_networks' | 'water_production_site' | 'water_production_sites' | 'water_storage_tank' | 'water_storage_tanks' | 'water_treatment_plant' | 'water_treatment_plants' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	catchment_district?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_districts?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_province?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_provinces?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	default_user_district?: FieldPolicy<any> | FieldReadFunction<any>,
	default_user_organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	disaggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	disaggregate_option?: FieldPolicy<any> | FieldReadFunction<any>,
	disaggregate_options?: FieldPolicy<any> | FieldReadFunction<any>,
	disaggregates?: FieldPolicy<any> | FieldReadFunction<any>,
	district?: FieldPolicy<any> | FieldReadFunction<any>,
	district_user?: FieldPolicy<any> | FieldReadFunction<any>,
	district_users?: FieldPolicy<any> | FieldReadFunction<any>,
	districts?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_disaggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_disaggregate_report?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_disaggregate_reports?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_disaggregates?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_unit?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_units?: FieldPolicy<any> | FieldReadFunction<any>,
	indicators?: FieldPolicy<any> | FieldReadFunction<any>,
	isLoggedIn?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	option?: FieldPolicy<any> | FieldReadFunction<any>,
	options?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_indicator?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_indicators?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_report_template?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_report_templates?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_reports?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_user?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_users?: FieldPolicy<any> | FieldReadFunction<any>,
	organisations?: FieldPolicy<any> | FieldReadFunction<any>,
	province?: FieldPolicy<any> | FieldReadFunction<any>,
	provinces?: FieldPolicy<any> | FieldReadFunction<any>,
	report?: FieldPolicy<any> | FieldReadFunction<any>,
	report_template?: FieldPolicy<any> | FieldReadFunction<any>,
	report_templates?: FieldPolicy<any> | FieldReadFunction<any>,
	reports?: FieldPolicy<any> | FieldReadFunction<any>,
	residence?: FieldPolicy<any> | FieldReadFunction<any>,
	residences?: FieldPolicy<any> | FieldReadFunction<any>,
	service_area?: FieldPolicy<any> | FieldReadFunction<any>,
	service_area_sewer_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	service_area_sewer_connections?: FieldPolicy<any> | FieldReadFunction<any>,
	service_area_water_connection?: FieldPolicy<any> | FieldReadFunction<any>,
	service_area_water_connections?: FieldPolicy<any> | FieldReadFunction<any>,
	service_areas?: FieldPolicy<any> | FieldReadFunction<any>,
	sewer_network?: FieldPolicy<any> | FieldReadFunction<any>,
	sewer_networks?: FieldPolicy<any> | FieldReadFunction<any>,
	sewer_treatment_plant?: FieldPolicy<any> | FieldReadFunction<any>,
	sewer_treatment_plants?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	user_invitation?: FieldPolicy<any> | FieldReadFunction<any>,
	user_invitations?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	water_network?: FieldPolicy<any> | FieldReadFunction<any>,
	water_networks?: FieldPolicy<any> | FieldReadFunction<any>,
	water_production_site?: FieldPolicy<any> | FieldReadFunction<any>,
	water_production_sites?: FieldPolicy<any> | FieldReadFunction<any>,
	water_storage_tank?: FieldPolicy<any> | FieldReadFunction<any>,
	water_storage_tanks?: FieldPolicy<any> | FieldReadFunction<any>,
	water_treatment_plant?: FieldPolicy<any> | FieldReadFunction<any>,
	water_treatment_plants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReportKeySpecifier = ('id' | 'reporting_period' | 'reporting_period_start_date' | 'reporting_period_end_date' | 'report_due_date' | 'reporting_date' | 'organisation_report_template_id' | 'organisation_report_template' | 'catchment_district_id' | 'catchment_district' | 'indicator_disaggregate_reports' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | ReportKeySpecifier)[];
export type ReportFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	reporting_period?: FieldPolicy<any> | FieldReadFunction<any>,
	reporting_period_start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	reporting_period_end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	report_due_date?: FieldPolicy<any> | FieldReadFunction<any>,
	reporting_date?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_report_template_id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_report_template?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_district_id?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_district?: FieldPolicy<any> | FieldReadFunction<any>,
	indicator_disaggregate_reports?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReportTemplateKeySpecifier = ('id' | 'name' | 'type' | 'frequency' | 'window' | 'icon' | 'indicators' | 'organisation_report_templates' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | ReportTemplateKeySpecifier)[];
export type ReportTemplateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	frequency?: FieldPolicy<any> | FieldReadFunction<any>,
	window?: FieldPolicy<any> | FieldReadFunction<any>,
	icon?: FieldPolicy<any> | FieldReadFunction<any>,
	indicators?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_report_templates?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResidenceKeySpecifier = ('id' | 'name' | 'cost_classification' | 'district_id' | 'district' | 'service_areas' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | ResidenceKeySpecifier)[];
export type ResidenceFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	cost_classification?: FieldPolicy<any> | FieldReadFunction<any>,
	district_id?: FieldPolicy<any> | FieldReadFunction<any>,
	district?: FieldPolicy<any> | FieldReadFunction<any>,
	service_areas?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceAreaKeySpecifier = ('id' | 'residence_id' | 'residence' | 'catchment_district_id' | 'catchment_district' | 'service_area_water_connections' | 'service_area_sewer_connections' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | ServiceAreaKeySpecifier)[];
export type ServiceAreaFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	residence_id?: FieldPolicy<any> | FieldReadFunction<any>,
	residence?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_district_id?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_district?: FieldPolicy<any> | FieldReadFunction<any>,
	service_area_water_connections?: FieldPolicy<any> | FieldReadFunction<any>,
	service_area_sewer_connections?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceAreaSewerConnectionKeySpecifier = ('connections' | 'sewer_netowrk_id' | 'sewer_network' | 'service_area_id' | 'service_area' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | ServiceAreaSewerConnectionKeySpecifier)[];
export type ServiceAreaSewerConnectionFieldPolicy = {
	connections?: FieldPolicy<any> | FieldReadFunction<any>,
	sewer_netowrk_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sewer_network?: FieldPolicy<any> | FieldReadFunction<any>,
	service_area_id?: FieldPolicy<any> | FieldReadFunction<any>,
	service_area?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceAreaWaterConnectionKeySpecifier = ('connections' | 'water_netowrk_id' | 'water_network' | 'service_area_id' | 'service_area' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | ServiceAreaWaterConnectionKeySpecifier)[];
export type ServiceAreaWaterConnectionFieldPolicy = {
	connections?: FieldPolicy<any> | FieldReadFunction<any>,
	water_netowrk_id?: FieldPolicy<any> | FieldReadFunction<any>,
	water_network?: FieldPolicy<any> | FieldReadFunction<any>,
	service_area_id?: FieldPolicy<any> | FieldReadFunction<any>,
	service_area?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SewerNetworkKeySpecifier = ('id' | 'name' | 'plant_id' | 'sewer_treatment_plant' | 'type' | 'sewer_network_sewer_connections' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | SewerNetworkKeySpecifier)[];
export type SewerNetworkFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	plant_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sewer_treatment_plant?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	sewer_network_sewer_connections?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SewerTreatmentPlantKeySpecifier = ('id' | 'name' | 'ponds' | 'capacity' | 'gps' | 'catchment_district_id' | 'catchment_district' | 'sewer_network' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | SewerTreatmentPlantKeySpecifier)[];
export type SewerTreatmentPlantFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ponds?: FieldPolicy<any> | FieldReadFunction<any>,
	capacity?: FieldPolicy<any> | FieldReadFunction<any>,
	gps?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_district_id?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_district?: FieldPolicy<any> | FieldReadFunction<any>,
	sewer_network?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('userInvitationUpdated' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	userInvitationUpdated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSewerTreatmentPlantPayloadKeySpecifier = ('sewer_treatment_plant' | UpdateSewerTreatmentPlantPayloadKeySpecifier)[];
export type UpdateSewerTreatmentPlantPayloadFieldPolicy = {
	sewer_treatment_plant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateWaterProductionSitePayloadKeySpecifier = ('water_production_site' | UpdateWaterProductionSitePayloadKeySpecifier)[];
export type UpdateWaterProductionSitePayloadFieldPolicy = {
	water_production_site?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateWaterStorageTankPayloadKeySpecifier = ('water_storage_tank' | UpdateWaterStorageTankPayloadKeySpecifier)[];
export type UpdateWaterStorageTankPayloadFieldPolicy = {
	water_storage_tank?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateWaterTreatmentPlantPayloadKeySpecifier = ('water_treatment_plant' | UpdateWaterTreatmentPlantPayloadKeySpecifier)[];
export type UpdateWaterTreatmentPlantPayloadFieldPolicy = {
	water_treatment_plant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('id' | 'first_name' | 'last_name' | 'email' | 'disabled' | 'master_support' | 'user_organisations' | 'user_default_organisation' | 'hashed_confirmation_token' | 'confirmed_at' | 'hashed_password_reset_token' | 'last_login' | 'theme' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	master_support?: FieldPolicy<any> | FieldReadFunction<any>,
	user_organisations?: FieldPolicy<any> | FieldReadFunction<any>,
	user_default_organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	hashed_confirmation_token?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmed_at?: FieldPolicy<any> | FieldReadFunction<any>,
	hashed_password_reset_token?: FieldPolicy<any> | FieldReadFunction<any>,
	last_login?: FieldPolicy<any> | FieldReadFunction<any>,
	theme?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserDistrictKeySpecifier = ('id' | 'name' | 'code' | 'user_id' | 'user' | 'catchment_district_id' | 'organisation_id' | 'organisation' | 'is_default_user_district' | 'district_user_id' | 'disabled' | 'user_district_roles' | 'province_id' | 'province' | 'service_areas' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | UserDistrictKeySpecifier)[];
export type UserDistrictFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_district_id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_id?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	is_default_user_district?: FieldPolicy<any> | FieldReadFunction<any>,
	district_user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	disabled?: FieldPolicy<any> | FieldReadFunction<any>,
	user_district_roles?: FieldPolicy<any> | FieldReadFunction<any>,
	province_id?: FieldPolicy<any> | FieldReadFunction<any>,
	province?: FieldPolicy<any> | FieldReadFunction<any>,
	service_areas?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserInvitationKeySpecifier = ('id' | 'ttl' | 'email' | 'organisation_id' | 'catchment_district_ids' | 'invitation_token' | 'email_status' | UserInvitationKeySpecifier)[];
export type UserInvitationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ttl?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_id?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_district_ids?: FieldPolicy<any> | FieldReadFunction<any>,
	invitation_token?: FieldPolicy<any> | FieldReadFunction<any>,
	email_status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserOrganisationKeySpecifier = ('id' | 'name' | 'logo' | 'user_id' | 'user' | 'is_user_default_organisation' | 'user_default_district' | 'user_districts' | 'user_organisation_role' | 'country_id' | 'country' | 'catchment_provinces' | 'users' | 'organisation_report_templates' | 'organisation_indicators' | 'reports' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | UserOrganisationKeySpecifier)[];
export type UserOrganisationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	is_user_default_organisation?: FieldPolicy<any> | FieldReadFunction<any>,
	user_default_district?: FieldPolicy<any> | FieldReadFunction<any>,
	user_districts?: FieldPolicy<any> | FieldReadFunction<any>,
	user_organisation_role?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_provinces?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_report_templates?: FieldPolicy<any> | FieldReadFunction<any>,
	organisation_indicators?: FieldPolicy<any> | FieldReadFunction<any>,
	reports?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WaterNetworkKeySpecifier = ('id' | 'name' | 'plant_id' | 'water_treatment_plant' | 'type' | 'water_network_water_connections' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | WaterNetworkKeySpecifier)[];
export type WaterNetworkFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	plant_id?: FieldPolicy<any> | FieldReadFunction<any>,
	water_treatment_plant?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	water_network_water_connections?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WaterProductionSiteKeySpecifier = ('id' | 'name' | 'static_suction_head' | 'static_discharge_head' | 'gps' | 'type' | 'plant_id' | 'water_treatment_plant' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | WaterProductionSiteKeySpecifier)[];
export type WaterProductionSiteFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	static_suction_head?: FieldPolicy<any> | FieldReadFunction<any>,
	static_discharge_head?: FieldPolicy<any> | FieldReadFunction<any>,
	gps?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	plant_id?: FieldPolicy<any> | FieldReadFunction<any>,
	water_treatment_plant?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WaterStorageTankKeySpecifier = ('id' | 'name' | 'type' | 'storage_capacity' | 'gps' | 'plant_id' | 'water_treatment_plant' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | WaterStorageTankKeySpecifier)[];
export type WaterStorageTankFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	storage_capacity?: FieldPolicy<any> | FieldReadFunction<any>,
	gps?: FieldPolicy<any> | FieldReadFunction<any>,
	plant_id?: FieldPolicy<any> | FieldReadFunction<any>,
	water_treatment_plant?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WaterTreatmentPlantKeySpecifier = ('id' | 'name' | 'water_source' | 'production_capacity' | 'gps' | 'catchment_district_id' | 'catchment_district' | 'water_production_sites' | 'water_storage_tanks' | 'water_network' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | WaterTreatmentPlantKeySpecifier)[];
export type WaterTreatmentPlantFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	water_source?: FieldPolicy<any> | FieldReadFunction<any>,
	production_capacity?: FieldPolicy<any> | FieldReadFunction<any>,
	gps?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_district_id?: FieldPolicy<any> | FieldReadFunction<any>,
	catchment_district?: FieldPolicy<any> | FieldReadFunction<any>,
	water_production_sites?: FieldPolicy<any> | FieldReadFunction<any>,
	water_storage_tanks?: FieldPolicy<any> | FieldReadFunction<any>,
	water_network?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_modified_by?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	ApiBatchPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApiBatchPayloadKeySpecifier | (() => undefined | ApiBatchPayloadKeySpecifier),
		fields?: ApiBatchPayloadFieldPolicy,
	},
	ApiCreateError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApiCreateErrorKeySpecifier | (() => undefined | ApiCreateErrorKeySpecifier),
		fields?: ApiCreateErrorFieldPolicy,
	},
	ApiDeleteError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApiDeleteErrorKeySpecifier | (() => undefined | ApiDeleteErrorKeySpecifier),
		fields?: ApiDeleteErrorFieldPolicy,
	},
	ApiError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApiErrorKeySpecifier | (() => undefined | ApiErrorKeySpecifier),
		fields?: ApiErrorFieldPolicy,
	},
	ApiLoginError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApiLoginErrorKeySpecifier | (() => undefined | ApiLoginErrorKeySpecifier),
		fields?: ApiLoginErrorFieldPolicy,
	},
	ApiNotFoundError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApiNotFoundErrorKeySpecifier | (() => undefined | ApiNotFoundErrorKeySpecifier),
		fields?: ApiNotFoundErrorFieldPolicy,
	},
	ApiOperationError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApiOperationErrorKeySpecifier | (() => undefined | ApiOperationErrorKeySpecifier),
		fields?: ApiOperationErrorFieldPolicy,
	},
	ApiPasswordResetError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApiPasswordResetErrorKeySpecifier | (() => undefined | ApiPasswordResetErrorKeySpecifier),
		fields?: ApiPasswordResetErrorFieldPolicy,
	},
	ApiUpdateError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApiUpdateErrorKeySpecifier | (() => undefined | ApiUpdateErrorKeySpecifier),
		fields?: ApiUpdateErrorFieldPolicy,
	},
	CatchmentDistrict?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CatchmentDistrictKeySpecifier | (() => undefined | CatchmentDistrictKeySpecifier),
		fields?: CatchmentDistrictFieldPolicy,
	},
	CatchmentDistrictView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CatchmentDistrictViewKeySpecifier | (() => undefined | CatchmentDistrictViewKeySpecifier),
		fields?: CatchmentDistrictViewFieldPolicy,
	},
	CatchmentProvince?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CatchmentProvinceKeySpecifier | (() => undefined | CatchmentProvinceKeySpecifier),
		fields?: CatchmentProvinceFieldPolicy,
	},
	CatchmentProvinceView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CatchmentProvinceViewKeySpecifier | (() => undefined | CatchmentProvinceViewKeySpecifier),
		fields?: CatchmentProvinceViewFieldPolicy,
	},
	Country?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CountryKeySpecifier | (() => undefined | CountryKeySpecifier),
		fields?: CountryFieldPolicy,
	},
	CreateOrganisationIndicatorsSuccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateOrganisationIndicatorsSuccessKeySpecifier | (() => undefined | CreateOrganisationIndicatorsSuccessKeySpecifier),
		fields?: CreateOrganisationIndicatorsSuccessFieldPolicy,
	},
	CreateSewerTreatmentPlantPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSewerTreatmentPlantPayloadKeySpecifier | (() => undefined | CreateSewerTreatmentPlantPayloadKeySpecifier),
		fields?: CreateSewerTreatmentPlantPayloadFieldPolicy,
	},
	CreateWaterProductionSitePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateWaterProductionSitePayloadKeySpecifier | (() => undefined | CreateWaterProductionSitePayloadKeySpecifier),
		fields?: CreateWaterProductionSitePayloadFieldPolicy,
	},
	CreateWaterStorageTankPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateWaterStorageTankPayloadKeySpecifier | (() => undefined | CreateWaterStorageTankPayloadKeySpecifier),
		fields?: CreateWaterStorageTankPayloadFieldPolicy,
	},
	CreateWaterTreatmentPlantPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateWaterTreatmentPlantPayloadKeySpecifier | (() => undefined | CreateWaterTreatmentPlantPayloadKeySpecifier),
		fields?: CreateWaterTreatmentPlantPayloadFieldPolicy,
	},
	DeleteWaterProductionSitePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteWaterProductionSitePayloadKeySpecifier | (() => undefined | DeleteWaterProductionSitePayloadKeySpecifier),
		fields?: DeleteWaterProductionSitePayloadFieldPolicy,
	},
	DeleteWaterStorageTankPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteWaterStorageTankPayloadKeySpecifier | (() => undefined | DeleteWaterStorageTankPayloadKeySpecifier),
		fields?: DeleteWaterStorageTankPayloadFieldPolicy,
	},
	Disaggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DisaggregateKeySpecifier | (() => undefined | DisaggregateKeySpecifier),
		fields?: DisaggregateFieldPolicy,
	},
	DisaggregateOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DisaggregateOptionKeySpecifier | (() => undefined | DisaggregateOptionKeySpecifier),
		fields?: DisaggregateOptionFieldPolicy,
	},
	District?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DistrictKeySpecifier | (() => undefined | DistrictKeySpecifier),
		fields?: DistrictFieldPolicy,
	},
	DistrictUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DistrictUserKeySpecifier | (() => undefined | DistrictUserKeySpecifier),
		fields?: DistrictUserFieldPolicy,
	},
	ErrorField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorFieldKeySpecifier | (() => undefined | ErrorFieldKeySpecifier),
		fields?: ErrorFieldFieldPolicy,
	},
	Indicator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IndicatorKeySpecifier | (() => undefined | IndicatorKeySpecifier),
		fields?: IndicatorFieldPolicy,
	},
	IndicatorDisaggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IndicatorDisaggregateKeySpecifier | (() => undefined | IndicatorDisaggregateKeySpecifier),
		fields?: IndicatorDisaggregateFieldPolicy,
	},
	IndicatorDisaggregateReport?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IndicatorDisaggregateReportKeySpecifier | (() => undefined | IndicatorDisaggregateReportKeySpecifier),
		fields?: IndicatorDisaggregateReportFieldPolicy,
	},
	IndicatorUnit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IndicatorUnitKeySpecifier | (() => undefined | IndicatorUnitKeySpecifier),
		fields?: IndicatorUnitFieldPolicy,
	},
	LoginSuccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginSuccessKeySpecifier | (() => undefined | LoginSuccessKeySpecifier),
		fields?: LoginSuccessFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Option?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OptionKeySpecifier | (() => undefined | OptionKeySpecifier),
		fields?: OptionFieldPolicy,
	},
	Organisation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganisationKeySpecifier | (() => undefined | OrganisationKeySpecifier),
		fields?: OrganisationFieldPolicy,
	},
	OrganisationIndicator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganisationIndicatorKeySpecifier | (() => undefined | OrganisationIndicatorKeySpecifier),
		fields?: OrganisationIndicatorFieldPolicy,
	},
	OrganisationIndicatorView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganisationIndicatorViewKeySpecifier | (() => undefined | OrganisationIndicatorViewKeySpecifier),
		fields?: OrganisationIndicatorViewFieldPolicy,
	},
	OrganisationReportTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganisationReportTemplateKeySpecifier | (() => undefined | OrganisationReportTemplateKeySpecifier),
		fields?: OrganisationReportTemplateFieldPolicy,
	},
	OrganisationReportTemplateView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganisationReportTemplateViewKeySpecifier | (() => undefined | OrganisationReportTemplateViewKeySpecifier),
		fields?: OrganisationReportTemplateViewFieldPolicy,
	},
	OrganisationUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganisationUserKeySpecifier | (() => undefined | OrganisationUserKeySpecifier),
		fields?: OrganisationUserFieldPolicy,
	},
	OrganisationUserView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganisationUserViewKeySpecifier | (() => undefined | OrganisationUserViewKeySpecifier),
		fields?: OrganisationUserViewFieldPolicy,
	},
	PasswordResetRequestPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PasswordResetRequestPayloadKeySpecifier | (() => undefined | PasswordResetRequestPayloadKeySpecifier),
		fields?: PasswordResetRequestPayloadFieldPolicy,
	},
	Province?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProvinceKeySpecifier | (() => undefined | ProvinceKeySpecifier),
		fields?: ProvinceFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Report?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReportKeySpecifier | (() => undefined | ReportKeySpecifier),
		fields?: ReportFieldPolicy,
	},
	ReportTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReportTemplateKeySpecifier | (() => undefined | ReportTemplateKeySpecifier),
		fields?: ReportTemplateFieldPolicy,
	},
	Residence?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResidenceKeySpecifier | (() => undefined | ResidenceKeySpecifier),
		fields?: ResidenceFieldPolicy,
	},
	ServiceArea?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceAreaKeySpecifier | (() => undefined | ServiceAreaKeySpecifier),
		fields?: ServiceAreaFieldPolicy,
	},
	ServiceAreaSewerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceAreaSewerConnectionKeySpecifier | (() => undefined | ServiceAreaSewerConnectionKeySpecifier),
		fields?: ServiceAreaSewerConnectionFieldPolicy,
	},
	ServiceAreaWaterConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceAreaWaterConnectionKeySpecifier | (() => undefined | ServiceAreaWaterConnectionKeySpecifier),
		fields?: ServiceAreaWaterConnectionFieldPolicy,
	},
	SewerNetwork?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SewerNetworkKeySpecifier | (() => undefined | SewerNetworkKeySpecifier),
		fields?: SewerNetworkFieldPolicy,
	},
	SewerTreatmentPlant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SewerTreatmentPlantKeySpecifier | (() => undefined | SewerTreatmentPlantKeySpecifier),
		fields?: SewerTreatmentPlantFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	UpdateSewerTreatmentPlantPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSewerTreatmentPlantPayloadKeySpecifier | (() => undefined | UpdateSewerTreatmentPlantPayloadKeySpecifier),
		fields?: UpdateSewerTreatmentPlantPayloadFieldPolicy,
	},
	UpdateWaterProductionSitePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateWaterProductionSitePayloadKeySpecifier | (() => undefined | UpdateWaterProductionSitePayloadKeySpecifier),
		fields?: UpdateWaterProductionSitePayloadFieldPolicy,
	},
	UpdateWaterStorageTankPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateWaterStorageTankPayloadKeySpecifier | (() => undefined | UpdateWaterStorageTankPayloadKeySpecifier),
		fields?: UpdateWaterStorageTankPayloadFieldPolicy,
	},
	UpdateWaterTreatmentPlantPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateWaterTreatmentPlantPayloadKeySpecifier | (() => undefined | UpdateWaterTreatmentPlantPayloadKeySpecifier),
		fields?: UpdateWaterTreatmentPlantPayloadFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserDistrict?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserDistrictKeySpecifier | (() => undefined | UserDistrictKeySpecifier),
		fields?: UserDistrictFieldPolicy,
	},
	UserInvitation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserInvitationKeySpecifier | (() => undefined | UserInvitationKeySpecifier),
		fields?: UserInvitationFieldPolicy,
	},
	UserOrganisation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserOrganisationKeySpecifier | (() => undefined | UserOrganisationKeySpecifier),
		fields?: UserOrganisationFieldPolicy,
	},
	WaterNetwork?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WaterNetworkKeySpecifier | (() => undefined | WaterNetworkKeySpecifier),
		fields?: WaterNetworkFieldPolicy,
	},
	WaterProductionSite?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WaterProductionSiteKeySpecifier | (() => undefined | WaterProductionSiteKeySpecifier),
		fields?: WaterProductionSiteFieldPolicy,
	},
	WaterStorageTank?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WaterStorageTankKeySpecifier | (() => undefined | WaterStorageTankKeySpecifier),
		fields?: WaterStorageTankFieldPolicy,
	},
	WaterTreatmentPlant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WaterTreatmentPlantKeySpecifier | (() => undefined | WaterTreatmentPlantKeySpecifier),
		fields?: WaterTreatmentPlantFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;