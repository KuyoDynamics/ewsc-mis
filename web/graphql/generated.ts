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
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<ErrorField>>;
};

export type ApiError = {
  message: Scalars['String'];
};

export type ApiLoginError = ApiError & {
  __typename?: 'ApiLoginError';
  message: Scalars['String'];
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<ErrorField>>;
};

export type ApiNotFoundError = ApiError & {
  __typename?: 'ApiNotFoundError';
  message: Scalars['String'];
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<ErrorField>>;
};

export type ApiOperationError = ApiError & {
  __typename?: 'ApiOperationError';
  message: Scalars['String'];
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<ErrorField>>;
};

export type ApiPasswordResetError = ApiError & {
  __typename?: 'ApiPasswordResetError';
  message: Scalars['String'];
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<ErrorField>>;
};

export type ApiUpdateError = ApiError & {
  __typename?: 'ApiUpdateError';
  message: Scalars['String'];
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<ErrorField>>;
};

export type CancelPasswordResetRequestInput = {
  user_id: Scalars['ID'];
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

export type ChangePasswordInput = {
  user_id: Scalars['ID'];
  new_password: Scalars['String'];
  password: Scalars['String'];
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
  category?: InputMaybe<Scalars['String']>;
  type: IndicatorType;
  indicator_unit_id: Scalars['String'];
  report_template_id?: InputMaybe<Scalars['String']>;
  contributing_organisation: Scalars['String'];
};

export type CreateIndicatorUnitInput = {
  unit: Scalars['String'];
  display_name: Scalars['String'];
};

export type CreateInvitedUserInput = {
  user_invitation_id: Scalars['ID'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
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
  option?: Maybe<Option>;
  disaggregate_id: Scalars['ID'];
  disaggregate?: Maybe<Disaggregate>;
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
  option_ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type District = {
  __typename?: 'District';
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
  province_id: Scalars['String'];
  province?: Maybe<Province>;
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
  category?: Maybe<Scalars['String']>;
  type: IndicatorType;
  contributing_organisation: Scalars['String'];
  report_template_id?: Maybe<Scalars['String']>;
  report_template?: Maybe<ReportTemplate>;
  indicator_unit_id: Scalars['String'];
  indicator_unit?: Maybe<IndicatorUnit>;
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
  indicators?: Maybe<Array<Indicator>>;
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
  contributing_organisation?: InputMaybe<Scalars['String']>;
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
  requestPasswordReset: UserResult;
  cancelRequestPasswordReset: UserResult;
  resetPassword: PasswordResetResult;
  changePassword: UserResult;
  createOrganisationUser: OrganisationUserResult;
  updateOrganisationUser: OrganisationUserResult;
  setUserDefaultProject: OrganisationUserResult;
  deleteOrganisationUser: OrganisationUserResult;
  createDistrictUser: DistrictUserResult;
  setUserDefaultDistrict: DistrictUserResult;
  updateUserRolesForDistrict: DistrictUserResult;
  deleteDistrictUser: DistrictUserResult;
  createUserInvitation: Array<UserInvitationResult>;
  sendUserInvitationEmail: UserInvitationResult;
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


export type MutationCancelRequestPasswordResetArgs = {
  input: CancelPasswordResetRequestInput;
};


export type MutationResetPasswordArgs = {
  input: PasswordResetInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
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

export type PasswordResetResult = User | ApiPasswordResetError;

export type Province = {
  __typename?: 'Province';
  id: Scalars['ID'];
  code: Scalars['String'];
  name: Scalars['String'];
  country_id: Scalars['String'];
  country?: Maybe<Country>;
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
  district?: Maybe<District>;
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
  passwordRequestEmailCompleted?: Maybe<User>;
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
  password_reset_email_status?: Maybe<EmailStatus>;
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

export type CancelRequestPasswordResetMutationVariables = Exact<{
  input: CancelPasswordResetRequestInput;
}>;


export type CancelRequestPasswordResetMutation = { __typename?: 'Mutation', cancelRequestPasswordReset: { __typename?: 'User', id: string, hashed_password_reset_token?: string | null, password_reset_email_status?: EmailStatus | null, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, value?: string | null, message: string }> | null } | { __typename?: 'ApiDeleteError' } };

export type ChangePasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'User', id: string, email: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError', message: string, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, value?: string | null, message: string }> | null } | { __typename?: 'ApiDeleteError' } };

export type CreateCountryMutationVariables = Exact<{
  input: CreateCountryInput;
}>;


export type CreateCountryMutation = { __typename?: 'Mutation', createCountry: { __typename?: 'Country', code: string, created_at: any, created_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type CreateInvitedUserMutationVariables = Exact<{
  input: CreateInvitedUserInput;
}>;


export type CreateInvitedUserMutation = { __typename?: 'Mutation', createInvitedUser: { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, disabled: boolean, master_support: boolean, theme?: UserTheme | null, created_at: any, created_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError', message: string, field?: string | null, value?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type CreateUserInvitationMutationVariables = Exact<{
  input: CreateUserInvitationInput;
}>;


export type CreateUserInvitationMutation = { __typename?: 'Mutation', createUserInvitation: Array<{ __typename?: 'UserInvitation', id: string, catchment_district_ids?: Array<string> | null, email: any, invitation_token: string, organisation_id: string, ttl: any } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError', message: string, field?: string | null, value?: string | null } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' }> };

export type DeleteCountryMutationVariables = Exact<{
  input: DeleteCountryInput;
}>;


export type DeleteCountryMutation = { __typename?: 'Mutation', deleteCountry: { __typename?: 'Country', id: string, name: string, code: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } };

export type DeleteUserInvitationMutationVariables = Exact<{
  input: DeleteUserInvitationInput;
}>;


export type DeleteUserInvitationMutation = { __typename?: 'Mutation', deleteUserInvitation: { __typename?: 'UserInvitation', id: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError', message: string, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string }> | null } };

export type DisableUserMutationVariables = Exact<{
  input: DisableUserInput;
}>;


export type DisableUserMutation = { __typename?: 'Mutation', disableUser: { __typename?: 'User', id: string, disabled: boolean } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type CreateDisaggregateWithOptionsMutationVariables = Exact<{
  input: CreateDisaggregateWithOptionsInput;
}>;


export type CreateDisaggregateWithOptionsMutation = { __typename?: 'Mutation', createDisaggregateWithOptions: { __typename?: 'Disaggregate', id: string, name: string, type: DisaggregateType, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, disaggregate_options?: Array<{ __typename?: 'DisaggregateOption', id: string, option_id: string, option?: { __typename?: 'Option', id: string, option_name: string } | null }> | null } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type CreateDisaggregateMutationVariables = Exact<{
  input: CreateDisaggregateInput;
}>;


export type CreateDisaggregateMutation = { __typename?: 'Mutation', createDisaggregate: { __typename?: 'Disaggregate', id: string, name: string, type: DisaggregateType, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, disaggregate_options?: Array<{ __typename?: 'DisaggregateOption', id: string, option_id: string, option?: { __typename?: 'Option', id: string, option_name: string } | null }> | null } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type DeleteDisaggregateMutationVariables = Exact<{
  input: DeleteDisaggregateInput;
}>;


export type DeleteDisaggregateMutation = { __typename?: 'Mutation', deleteDisaggregate: { __typename?: 'Disaggregate', id: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } };

export type GetDisaggregateQueryVariables = Exact<{
  disaggregateId: Scalars['ID'];
}>;


export type GetDisaggregateQuery = { __typename?: 'Query', disaggregate: { __typename?: 'Disaggregate', id: string, name: string, type: DisaggregateType, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, disaggregate_options?: Array<{ __typename?: 'DisaggregateOption', id: string, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, disaggregate_id: string, option?: { __typename?: 'Option', id: string, option_name: string, created_at: any, created_by: string } | null }> | null } | { __typename?: 'ApiNotFoundError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type GetDisaggregatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDisaggregatesQuery = { __typename?: 'Query', disaggregates?: Array<{ __typename?: 'Disaggregate', id: string, name: string, type: DisaggregateType, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, disaggregate_options?: Array<{ __typename?: 'DisaggregateOption', id: string, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, disaggregate_id: string, option?: { __typename?: 'Option', id: string, option_name: string, created_at: any, created_by: string } | null }> | null }> | null };

export type CreateOptionMutationVariables = Exact<{
  input: CreateOptionInput;
}>;


export type CreateOptionMutation = { __typename?: 'Mutation', createOption: { __typename?: 'Option', id: string, option_name: string, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type DeleteOptionMutationVariables = Exact<{
  input: DeleteOptionInput;
}>;


export type DeleteOptionMutation = { __typename?: 'Mutation', deleteOption: { __typename?: 'Option', id: string, option_name: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } };

export type GetOptionQueryVariables = Exact<{
  optionId: Scalars['ID'];
}>;


export type GetOptionQuery = { __typename?: 'Query', option: { __typename?: 'Option', id: string, option_name: string, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError', message: string, field?: string | null, value?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type GetOptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOptionsQuery = { __typename?: 'Query', options?: Array<{ __typename?: 'Option', id: string, option_name: string, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, disaggregate_options?: Array<{ __typename?: 'DisaggregateOption', id: string }> | null }> | null };

export type UpdateOptionMutationVariables = Exact<{
  input: UpdateOptionInput;
}>;


export type UpdateOptionMutation = { __typename?: 'Mutation', updateOption: { __typename?: 'Option', id: string, option_name: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiDeleteError' } };

export type UpdateDisaggregateMutationVariables = Exact<{
  input: UpdateDisaggregateInput;
}>;


export type UpdateDisaggregateMutation = { __typename?: 'Mutation', updateDisaggregate: { __typename?: 'Disaggregate', id: string, type: DisaggregateType, name: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiDeleteError' } };

export type CreateDistrictMutationVariables = Exact<{
  input: CreateDistrictInput;
}>;


export type CreateDistrictMutation = { __typename?: 'Mutation', createDistrict: { __typename?: 'District', id: string, code: string, name: string, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type DeleteDistrictMutationVariables = Exact<{
  input: DeleteDistrictInput;
}>;


export type DeleteDistrictMutation = { __typename?: 'Mutation', deleteDistrict: { __typename?: 'District', id: string, code: string, name: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError', message: string, field?: string | null, value?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } };

export type GetDistrictsQueryVariables = Exact<{
  provinceId: Scalars['ID'];
}>;


export type GetDistrictsQuery = { __typename?: 'Query', districts?: Array<{ __typename?: 'District', id: string, code: string, name: string, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, province_id: string, residences?: Array<{ __typename?: 'Residence', id: string, name: string, cost_classification: ResidenceClassification }> | null }> | null };

export type UpdateDistrictMutationVariables = Exact<{
  input: UpdateDistrictInput;
}>;


export type UpdateDistrictMutation = { __typename?: 'Mutation', updateDistrict: { __typename?: 'District', id: string, code: string, name: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError', message: string, field?: string | null, value?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiDeleteError' } };

export type GetCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'Query', countries?: Array<{ __typename?: 'Country', name: string, id: string, code: string, flag?: any | null, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, provinces?: Array<{ __typename?: 'Province', name: string, code: string, id: string, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, districts?: Array<{ __typename?: 'District', id: string, code: string, name: string, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string }> | null }> | null }> | null };

export type GetCountryQueryVariables = Exact<{
  countryId: Scalars['ID'];
}>;


export type GetCountryQuery = { __typename?: 'Query', country: { __typename?: 'Country', name: string, code: string, created_by: string, created_at: any } | { __typename?: 'ApiNotFoundError', message: string, field?: string | null, value?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, value?: string | null, message: string }> | null } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, first_name: string, last_name: string, email: string, disabled: boolean, user_organisations?: Array<{ __typename?: 'UserOrganisation', id: string, name: string, logo?: any | null, is_user_default_organisation: boolean, country?: { __typename?: 'Country', id: string, name: string } | null }> | null, user_default_organisation?: { __typename?: 'UserOrganisation', id: string, name: string, logo?: any | null, is_user_default_organisation: boolean, country_id: string, country?: { __typename?: 'Country', code: string, id: string, name: string, flag?: any | null } | null, users?: Array<{ __typename?: 'OrganisationUserView', id: string, first_name: string, last_name: string, email: string, disabled: boolean, master_support: boolean, organisation_id: string, organisation_user_id: string, role: OrganisationUserRoleType, hashed_confirmation_token?: string | null, confirmed_at?: any | null, hashed_password_reset_token?: string | null, last_login?: any | null, theme: UserTheme }> | null, user_districts?: Array<{ __typename?: 'UserDistrict', id: string, name: string, code: string, is_default_user_district: boolean, catchment_district_id: string, province?: { __typename?: 'Province', id: string, name: string, code: string } | null }> | null, catchment_provinces?: Array<{ __typename?: 'CatchmentProvinceView', id: string, code: string, name: string, disabled: boolean, catchment_districts?: Array<{ __typename?: 'CatchmentDistrictView', id: string, name: string, code: string, disabled: boolean, catchment_district_id: string, catchment_province_id: string }> | null }> | null } | null } | { __typename?: 'ApiNotFoundError', message: string } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type GetDefaultOrganisationUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDefaultOrganisationUsersQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, user_default_organisation?: { __typename?: 'UserOrganisation', id: string, users?: Array<{ __typename?: 'OrganisationUserView', id: string, organisation_user_id: string, last_name: string, first_name: string, email: string, master_support: boolean, disabled: boolean, role: OrganisationUserRoleType, theme: UserTheme, user_districts?: Array<{ __typename?: 'UserDistrict', id: string, code: string, name: string, disabled: boolean, is_default_user_district: boolean, district_user_id: string, catchment_district_id: string, user_district_roles: Array<DistrictUserRoleType>, province?: { __typename?: 'Province', id: string, name: string } | null }> | null }> | null } | null } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type GetUserInvitationsQueryVariables = Exact<{
  args: SearchUserInvitationsInput;
}>;


export type GetUserInvitationsQuery = { __typename?: 'Query', user_invitations?: Array<{ __typename?: 'UserInvitation', id: string, organisation_id: string, email: any, catchment_district_ids?: Array<string> | null, invitation_token: string, ttl: any, email_status: EmailStatus }> | null };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, email: string, first_name: string, last_name: string, disabled: boolean, last_login?: any | null, master_support: boolean, hashed_confirmation_token?: string | null, hashed_password_reset_token?: string | null, password_reset_email_status?: EmailStatus | null, confirmed_at?: any | null, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, theme?: UserTheme | null } | { __typename?: 'ApiNotFoundError', message: string, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type CreateIndicatorUnitMutationVariables = Exact<{
  input: CreateIndicatorUnitInput;
}>;


export type CreateIndicatorUnitMutation = { __typename?: 'Mutation', createIndicatorUnit: { __typename: 'IndicatorUnit', id: string, unit: string, display_name: string, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string } | { __typename: 'ApiNotFoundError' } | { __typename: 'ApiCreateError', message: string, field?: string | null, value?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename: 'ApiUpdateError' } | { __typename: 'ApiDeleteError' } };

export type DeleteIndicatorUnitMutationVariables = Exact<{
  input: DeleteIndicatorUnitInput;
}>;


export type DeleteIndicatorUnitMutation = { __typename?: 'Mutation', deleteIndicatorUnit: { __typename?: 'IndicatorUnit', id: string, last_modified_by: string, last_modified_at: any } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } };

export type GetIndicatorUnitQueryVariables = Exact<{
  indicatorUnitId: Scalars['ID'];
}>;


export type GetIndicatorUnitQuery = { __typename?: 'Query', indicator_unit: { __typename?: 'IndicatorUnit', id: string, display_name: string, unit: string, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, indicators?: Array<{ __typename?: 'Indicator', id: string }> | null } | { __typename?: 'ApiNotFoundError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, value?: string | null, message: string }> | null } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type GetIndicatorUnitsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIndicatorUnitsQuery = { __typename?: 'Query', indicator_units?: Array<{ __typename?: 'IndicatorUnit', id: string, unit: string, display_name: string, created_at: any, created_by: string, last_modified_by: string, last_modified_at: any, indicators?: Array<{ __typename?: 'Indicator', id: string }> | null }> | null };

export type UpdateIndicatorUnitMutationVariables = Exact<{
  input: UpdateIndicatorUnitInput;
}>;


export type UpdateIndicatorUnitMutation = { __typename?: 'Mutation', updateIndicatorUnit: { __typename?: 'IndicatorUnit', id: string, unit: string, display_name: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiDeleteError' } };

export type CreateIndicatorMutationVariables = Exact<{
  input: CreateIndicatorInput;
}>;


export type CreateIndicatorMutation = { __typename?: 'Mutation', createIndicator: { __typename: 'Indicator', id: string, description: string, category?: string | null, contributing_organisation: string, indicator_number: string, type: IndicatorType, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, indicator_unit_id: string, report_template_id?: string | null, indicator_unit?: { __typename?: 'IndicatorUnit', id: string } | null, indicator_organisations?: Array<{ __typename?: 'OrganisationIndicator', id: string }> | null, report_template?: { __typename?: 'ReportTemplate', id: string } | null } | { __typename: 'ApiNotFoundError' } | { __typename: 'ApiCreateError', message: string, field?: string | null, value?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, value?: string | null, message: string }> | null } | { __typename: 'ApiUpdateError' } | { __typename: 'ApiDeleteError' } };

export type DeleteIndicatorMutationVariables = Exact<{
  input: DeleteIndicatorInput;
}>;


export type DeleteIndicatorMutation = { __typename?: 'Mutation', deleteIndicator: { __typename?: 'Indicator', id: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError', message: string, field?: string | null, value?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } };

export type GetIndicatorQueryVariables = Exact<{
  indicatorId: Scalars['ID'];
}>;


export type GetIndicatorQuery = { __typename?: 'Query', indicator: { __typename?: 'Indicator', id: string, description: string, category?: string | null, contributing_organisation: string, indicator_number: string, type: IndicatorType, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, indicator_unit_id: string, report_template_id?: string | null, indicator_unit?: { __typename?: 'IndicatorUnit', id: string } | null, indicator_organisations?: Array<{ __typename?: 'OrganisationIndicator', id: string }> | null, report_template?: { __typename?: 'ReportTemplate', id: string } | null } | { __typename?: 'ApiNotFoundError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type GetIndicatorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIndicatorsQuery = { __typename?: 'Query', indicators?: Array<{ __typename?: 'Indicator', id: string, description: string, category?: string | null, contributing_organisation: string, indicator_number: string, type: IndicatorType, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, indicator_unit_id: string, report_template_id?: string | null, indicator_unit?: { __typename?: 'IndicatorUnit', id: string, display_name: string } | null, indicator_organisations?: Array<{ __typename?: 'OrganisationIndicator', id: string }> | null, report_template?: { __typename?: 'ReportTemplate', id: string, name: string } | null }> | null };

export type UpdateIndicatorMutationVariables = Exact<{
  input: UpdateIndicatorInput;
}>;


export type UpdateIndicatorMutation = { __typename?: 'Mutation', updateIndicator: { __typename?: 'Indicator', id: string, description: string, category?: string | null, contributing_organisation: string, indicator_number: string, type: IndicatorType, last_modified_at: any, last_modified_by: string, indicator_unit_id: string, report_template_id?: string | null, indicator_unit?: { __typename?: 'IndicatorUnit', id: string } | null, report_template?: { __typename?: 'ReportTemplate', id: string } | null } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError', message: string, field?: string | null, value?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiDeleteError' } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginSuccess', accessToken: any, id: string } | { __typename?: 'ApiLoginError', message: string, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string }> | null } };

export type OnPasswordResetEmailSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnPasswordResetEmailSubscription = { __typename?: 'Subscription', passwordRequestEmailCompleted?: { __typename?: 'User', id: string, email: string, hashed_password_reset_token?: string | null, password_reset_email_status?: EmailStatus | null, last_modified_at: any, last_modified_by: string } | null };

export type OnUserInvitationUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnUserInvitationUpdatedSubscription = { __typename?: 'Subscription', userInvitationUpdated: { __typename?: 'UserInvitation', id: string, email_status: EmailStatus } };

export type CreateProvinceMutationVariables = Exact<{
  input: CreateProvinceInput;
}>;


export type CreateProvinceMutation = { __typename?: 'Mutation', createProvince: { __typename?: 'Province', id: string, code: string, name: string, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type DeleteProvinceMutationVariables = Exact<{
  input: DeleteProvinceInput;
}>;


export type DeleteProvinceMutation = { __typename?: 'Mutation', deleteProvince: { __typename?: 'Province', id: string, code: string, name: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError', message: string, field?: string | null, value?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } };

export type GetProvincesQueryVariables = Exact<{
  countryId: Scalars['ID'];
}>;


export type GetProvincesQuery = { __typename?: 'Query', provinces?: Array<{ __typename?: 'Province', id: string, name: string, code: string, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, country_id: string, country?: { __typename?: 'Country', id: string, name: string, code: string } | null, districts?: Array<{ __typename?: 'District', id: string, code: string, name: string }> | null }> | null };

export type UpdateProvinceMutationVariables = Exact<{
  input: UpdateProvinceInput;
}>;


export type UpdateProvinceMutation = { __typename?: 'Mutation', updateProvince: { __typename?: 'Province', id: string, code: string, name: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError', message: string, field?: string | null, value?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiDeleteError' } };

export type GetReportTemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReportTemplatesQuery = { __typename?: 'Query', report_templates?: Array<{ __typename?: 'ReportTemplate', id: string, name: string, type: IndicatorType, window: number, frequency: ReportingFrequency, icon?: any | null, created_at: any, created_by: string, last_modified_at: any, last_modified_by: string, indicators?: Array<{ __typename?: 'Indicator', id: string }> | null, organisation_report_templates?: Array<{ __typename?: 'OrganisationReportTemplate', id: string }> | null }> | null };

export type RequestPasswordResetMutationVariables = Exact<{
  input: PasswordResetRequestInput;
}>;


export type RequestPasswordResetMutation = { __typename?: 'Mutation', requestPasswordReset: { __typename?: 'User', id: string, email: string, hashed_password_reset_token?: string | null, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError', message: string, field?: string | null, value?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiDeleteError' } };

export type ResetPasswordMutationVariables = Exact<{
  input: PasswordResetInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'User', id: string, hashed_password_reset_token?: string | null, password_reset_email_status?: EmailStatus | null, email: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiPasswordResetError', message: string, field?: string | null, value?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } };

export type CreateResidenceMutationVariables = Exact<{
  input: CreateResidenceInput;
}>;


export type CreateResidenceMutation = { __typename?: 'Mutation', createResidence: { __typename?: 'Residence', id: string, name: string, cost_classification: ResidenceClassification, district_id: string, last_modified_at: any, last_modified_by: string, created_at: any, created_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type DeleteResidenceMutationVariables = Exact<{
  input: DeleteResidenceInput;
}>;


export type DeleteResidenceMutation = { __typename?: 'Mutation', deleteResidence: { __typename?: 'Residence', id: string, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } };

export type GetResidenceQueryVariables = Exact<{
  residenceId: Scalars['ID'];
}>;


export type GetResidenceQuery = { __typename?: 'Query', residence: { __typename?: 'Residence', id: string, cost_classification: ResidenceClassification, name: string, district_id: string, last_modified_at: any, last_modified_by: string, created_at: any, created_by: string, service_areas?: Array<{ __typename?: 'ServiceArea', id: string, residence_id: string, catchment_district_id: string }> | null } | { __typename?: 'ApiNotFoundError', message: string, field?: string | null, value?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type GetResidencesQueryVariables = Exact<{
  districtId: Scalars['ID'];
}>;


export type GetResidencesQuery = { __typename?: 'Query', residences?: Array<{ __typename?: 'Residence', id: string, cost_classification: ResidenceClassification, name: string, district_id: string, last_modified_at: any, last_modified_by: string, created_at: any, created_by: string, district?: { __typename?: 'District', id: string, code: string, name: string, province?: { __typename?: 'Province', id: string, code: string, name: string, country?: { __typename?: 'Country', id: string, code: string, name: string } | null } | null } | null, service_areas?: Array<{ __typename?: 'ServiceArea', id: string, residence_id: string, catchment_district_id: string }> | null }> | null };

export type UpdateResidenceMutationVariables = Exact<{
  input: UpdateResidenceInput;
}>;


export type UpdateResidenceMutation = { __typename?: 'Mutation', updateResidence: { __typename?: 'Residence', id: string, name: string, cost_classification: ResidenceClassification, last_modified_by: string, last_modified_at: any } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiDeleteError' } };

export type SendUserInvitationEmailMutationVariables = Exact<{
  input: SendInvitationEmailInput;
}>;


export type SendUserInvitationEmailMutation = { __typename?: 'Mutation', sendUserInvitationEmail: { __typename?: 'UserInvitation', id: string, email_status: EmailStatus } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError', message: string } | { __typename?: 'ApiDeleteError' } };

export type UpdateCountryMutationVariables = Exact<{
  input: UpdateCountryInput;
}>;


export type UpdateCountryMutation = { __typename?: 'Mutation', updateCountry: { __typename?: 'Country', id: string, code: string, name: string, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError', message: string, value?: string | null, field?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiDeleteError' } };

export type UpdateUserOrganisationRoleMutationVariables = Exact<{
  input: UpdateOrganisationUserInput;
}>;


export type UpdateUserOrganisationRoleMutation = { __typename?: 'Mutation', updateOrganisationUser: { __typename?: 'OrganisationUser', id: string, role: OrganisationUserRoleType } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type UpdateUserRolesForDistrictMutationVariables = Exact<{
  input: UpdateUserRolesForDistrictInput;
}>;


export type UpdateUserRolesForDistrictMutation = { __typename?: 'Mutation', updateUserRolesForDistrict: { __typename?: 'DistrictUser', id: string, roles: Array<DistrictUserRoleType> } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError' } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, first_name: string, last_name: string, theme?: UserTheme | null, last_modified_at: any, last_modified_by: string } | { __typename?: 'ApiNotFoundError' } | { __typename?: 'ApiCreateError', message: string, field?: string | null, value?: string | null, errors?: Array<{ __typename?: 'ErrorField', field: string, message: string, value?: string | null }> | null } | { __typename?: 'ApiUpdateError' } | { __typename?: 'ApiDeleteError' } };


export const CancelRequestPasswordResetDocument = gql`
    mutation CancelRequestPasswordReset($input: CancelPasswordResetRequestInput!) {
  cancelRequestPasswordReset(input: $input) {
    ... on User {
      id
      hashed_password_reset_token
      password_reset_email_status
      last_modified_at
      last_modified_by
    }
    ... on ApiUpdateError {
      message
      value
      field
      errors {
        field
        value
        message
      }
    }
  }
}
    `;
export type CancelRequestPasswordResetMutationFn = Apollo.MutationFunction<CancelRequestPasswordResetMutation, CancelRequestPasswordResetMutationVariables>;

/**
 * __useCancelRequestPasswordResetMutation__
 *
 * To run a mutation, you first call `useCancelRequestPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelRequestPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelRequestPasswordResetMutation, { data, loading, error }] = useCancelRequestPasswordResetMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelRequestPasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<CancelRequestPasswordResetMutation, CancelRequestPasswordResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelRequestPasswordResetMutation, CancelRequestPasswordResetMutationVariables>(CancelRequestPasswordResetDocument, options);
      }
export type CancelRequestPasswordResetMutationHookResult = ReturnType<typeof useCancelRequestPasswordResetMutation>;
export type CancelRequestPasswordResetMutationResult = Apollo.MutationResult<CancelRequestPasswordResetMutation>;
export type CancelRequestPasswordResetMutationOptions = Apollo.BaseMutationOptions<CancelRequestPasswordResetMutation, CancelRequestPasswordResetMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($input: ChangePasswordInput!) {
  changePassword(input: $input) {
    ... on User {
      id
      email
      last_modified_at
      last_modified_by
    }
    ... on ApiUpdateError {
      message
      field
      errors {
        field
        value
        message
      }
    }
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateCountryDocument = gql`
    mutation CreateCountry($input: CreateCountryInput!) {
  createCountry(input: $input) {
    ... on Country {
      code
      created_at
      created_by
    }
    ... on ApiCreateError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type CreateCountryMutationFn = Apollo.MutationFunction<CreateCountryMutation, CreateCountryMutationVariables>;

/**
 * __useCreateCountryMutation__
 *
 * To run a mutation, you first call `useCreateCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCountryMutation, { data, loading, error }] = useCreateCountryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCountryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCountryMutation, CreateCountryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCountryMutation, CreateCountryMutationVariables>(CreateCountryDocument, options);
      }
export type CreateCountryMutationHookResult = ReturnType<typeof useCreateCountryMutation>;
export type CreateCountryMutationResult = Apollo.MutationResult<CreateCountryMutation>;
export type CreateCountryMutationOptions = Apollo.BaseMutationOptions<CreateCountryMutation, CreateCountryMutationVariables>;
export const CreateInvitedUserDocument = gql`
    mutation CreateInvitedUser($input: CreateInvitedUserInput!) {
  createInvitedUser(input: $input) {
    ... on User {
      id
      first_name
      last_name
      email
      disabled
      master_support
      theme
      created_at
      created_by
    }
    ... on ApiCreateError {
      message
      field
      value
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type CreateInvitedUserMutationFn = Apollo.MutationFunction<CreateInvitedUserMutation, CreateInvitedUserMutationVariables>;

/**
 * __useCreateInvitedUserMutation__
 *
 * To run a mutation, you first call `useCreateInvitedUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInvitedUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInvitedUserMutation, { data, loading, error }] = useCreateInvitedUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateInvitedUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateInvitedUserMutation, CreateInvitedUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInvitedUserMutation, CreateInvitedUserMutationVariables>(CreateInvitedUserDocument, options);
      }
export type CreateInvitedUserMutationHookResult = ReturnType<typeof useCreateInvitedUserMutation>;
export type CreateInvitedUserMutationResult = Apollo.MutationResult<CreateInvitedUserMutation>;
export type CreateInvitedUserMutationOptions = Apollo.BaseMutationOptions<CreateInvitedUserMutation, CreateInvitedUserMutationVariables>;
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
export const DeleteCountryDocument = gql`
    mutation DeleteCountry($input: DeleteCountryInput!) {
  deleteCountry(input: $input) {
    ... on Country {
      id
      name
      code
      last_modified_at
      last_modified_by
    }
    ... on ApiDeleteError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type DeleteCountryMutationFn = Apollo.MutationFunction<DeleteCountryMutation, DeleteCountryMutationVariables>;

/**
 * __useDeleteCountryMutation__
 *
 * To run a mutation, you first call `useDeleteCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCountryMutation, { data, loading, error }] = useDeleteCountryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCountryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCountryMutation, DeleteCountryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCountryMutation, DeleteCountryMutationVariables>(DeleteCountryDocument, options);
      }
export type DeleteCountryMutationHookResult = ReturnType<typeof useDeleteCountryMutation>;
export type DeleteCountryMutationResult = Apollo.MutationResult<DeleteCountryMutation>;
export type DeleteCountryMutationOptions = Apollo.BaseMutationOptions<DeleteCountryMutation, DeleteCountryMutationVariables>;
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
export const CreateDisaggregateWithOptionsDocument = gql`
    mutation CreateDisaggregateWithOptions($input: CreateDisaggregateWithOptionsInput!) {
  createDisaggregateWithOptions(input: $input) {
    ... on Disaggregate {
      id
      name
      type
      created_at
      created_by
      last_modified_at
      last_modified_by
      disaggregate_options {
        id
        option_id
        option {
          id
          option_name
        }
      }
    }
    ... on ApiCreateError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type CreateDisaggregateWithOptionsMutationFn = Apollo.MutationFunction<CreateDisaggregateWithOptionsMutation, CreateDisaggregateWithOptionsMutationVariables>;

/**
 * __useCreateDisaggregateWithOptionsMutation__
 *
 * To run a mutation, you first call `useCreateDisaggregateWithOptionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDisaggregateWithOptionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDisaggregateWithOptionsMutation, { data, loading, error }] = useCreateDisaggregateWithOptionsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDisaggregateWithOptionsMutation(baseOptions?: Apollo.MutationHookOptions<CreateDisaggregateWithOptionsMutation, CreateDisaggregateWithOptionsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDisaggregateWithOptionsMutation, CreateDisaggregateWithOptionsMutationVariables>(CreateDisaggregateWithOptionsDocument, options);
      }
export type CreateDisaggregateWithOptionsMutationHookResult = ReturnType<typeof useCreateDisaggregateWithOptionsMutation>;
export type CreateDisaggregateWithOptionsMutationResult = Apollo.MutationResult<CreateDisaggregateWithOptionsMutation>;
export type CreateDisaggregateWithOptionsMutationOptions = Apollo.BaseMutationOptions<CreateDisaggregateWithOptionsMutation, CreateDisaggregateWithOptionsMutationVariables>;
export const CreateDisaggregateDocument = gql`
    mutation CreateDisaggregate($input: CreateDisaggregateInput!) {
  createDisaggregate(input: $input) {
    ... on Disaggregate {
      id
      name
      type
      created_at
      created_by
      last_modified_at
      last_modified_by
      disaggregate_options {
        id
        option_id
        option {
          id
          option_name
        }
      }
    }
    ... on ApiCreateError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type CreateDisaggregateMutationFn = Apollo.MutationFunction<CreateDisaggregateMutation, CreateDisaggregateMutationVariables>;

/**
 * __useCreateDisaggregateMutation__
 *
 * To run a mutation, you first call `useCreateDisaggregateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDisaggregateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDisaggregateMutation, { data, loading, error }] = useCreateDisaggregateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDisaggregateMutation(baseOptions?: Apollo.MutationHookOptions<CreateDisaggregateMutation, CreateDisaggregateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDisaggregateMutation, CreateDisaggregateMutationVariables>(CreateDisaggregateDocument, options);
      }
export type CreateDisaggregateMutationHookResult = ReturnType<typeof useCreateDisaggregateMutation>;
export type CreateDisaggregateMutationResult = Apollo.MutationResult<CreateDisaggregateMutation>;
export type CreateDisaggregateMutationOptions = Apollo.BaseMutationOptions<CreateDisaggregateMutation, CreateDisaggregateMutationVariables>;
export const DeleteDisaggregateDocument = gql`
    mutation DeleteDisaggregate($input: DeleteDisaggregateInput!) {
  deleteDisaggregate(input: $input) {
    ... on Disaggregate {
      id
      last_modified_at
      last_modified_by
    }
    ... on ApiDeleteError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type DeleteDisaggregateMutationFn = Apollo.MutationFunction<DeleteDisaggregateMutation, DeleteDisaggregateMutationVariables>;

/**
 * __useDeleteDisaggregateMutation__
 *
 * To run a mutation, you first call `useDeleteDisaggregateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDisaggregateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDisaggregateMutation, { data, loading, error }] = useDeleteDisaggregateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteDisaggregateMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDisaggregateMutation, DeleteDisaggregateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDisaggregateMutation, DeleteDisaggregateMutationVariables>(DeleteDisaggregateDocument, options);
      }
export type DeleteDisaggregateMutationHookResult = ReturnType<typeof useDeleteDisaggregateMutation>;
export type DeleteDisaggregateMutationResult = Apollo.MutationResult<DeleteDisaggregateMutation>;
export type DeleteDisaggregateMutationOptions = Apollo.BaseMutationOptions<DeleteDisaggregateMutation, DeleteDisaggregateMutationVariables>;
export const GetDisaggregateDocument = gql`
    query GetDisaggregate($disaggregateId: ID!) {
  disaggregate(id: $disaggregateId) {
    ... on Disaggregate {
      id
      name
      type
      created_at
      created_by
      last_modified_at
      last_modified_by
      disaggregate_options {
        id
        created_at
        created_by
        last_modified_at
        last_modified_by
        disaggregate_id
        option {
          id
          option_name
          created_at
          created_by
        }
      }
    }
    ... on ApiNotFoundError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;

/**
 * __useGetDisaggregateQuery__
 *
 * To run a query within a React component, call `useGetDisaggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDisaggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDisaggregateQuery({
 *   variables: {
 *      disaggregateId: // value for 'disaggregateId'
 *   },
 * });
 */
export function useGetDisaggregateQuery(baseOptions: Apollo.QueryHookOptions<GetDisaggregateQuery, GetDisaggregateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDisaggregateQuery, GetDisaggregateQueryVariables>(GetDisaggregateDocument, options);
      }
export function useGetDisaggregateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDisaggregateQuery, GetDisaggregateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDisaggregateQuery, GetDisaggregateQueryVariables>(GetDisaggregateDocument, options);
        }
export type GetDisaggregateQueryHookResult = ReturnType<typeof useGetDisaggregateQuery>;
export type GetDisaggregateLazyQueryHookResult = ReturnType<typeof useGetDisaggregateLazyQuery>;
export type GetDisaggregateQueryResult = Apollo.QueryResult<GetDisaggregateQuery, GetDisaggregateQueryVariables>;
export const GetDisaggregatesDocument = gql`
    query GetDisaggregates {
  disaggregates {
    id
    name
    type
    created_at
    created_by
    last_modified_at
    last_modified_by
    disaggregate_options {
      id
      created_at
      created_by
      last_modified_at
      last_modified_by
      disaggregate_id
      option {
        id
        option_name
        created_at
        created_by
      }
    }
  }
}
    `;

/**
 * __useGetDisaggregatesQuery__
 *
 * To run a query within a React component, call `useGetDisaggregatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDisaggregatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDisaggregatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDisaggregatesQuery(baseOptions?: Apollo.QueryHookOptions<GetDisaggregatesQuery, GetDisaggregatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDisaggregatesQuery, GetDisaggregatesQueryVariables>(GetDisaggregatesDocument, options);
      }
export function useGetDisaggregatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDisaggregatesQuery, GetDisaggregatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDisaggregatesQuery, GetDisaggregatesQueryVariables>(GetDisaggregatesDocument, options);
        }
export type GetDisaggregatesQueryHookResult = ReturnType<typeof useGetDisaggregatesQuery>;
export type GetDisaggregatesLazyQueryHookResult = ReturnType<typeof useGetDisaggregatesLazyQuery>;
export type GetDisaggregatesQueryResult = Apollo.QueryResult<GetDisaggregatesQuery, GetDisaggregatesQueryVariables>;
export const CreateOptionDocument = gql`
    mutation CreateOption($input: CreateOptionInput!) {
  createOption(input: $input) {
    ... on Option {
      id
      option_name
      created_at
      created_by
      last_modified_at
      last_modified_by
    }
    ... on ApiCreateError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type CreateOptionMutationFn = Apollo.MutationFunction<CreateOptionMutation, CreateOptionMutationVariables>;

/**
 * __useCreateOptionMutation__
 *
 * To run a mutation, you first call `useCreateOptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOptionMutation, { data, loading, error }] = useCreateOptionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOptionMutation(baseOptions?: Apollo.MutationHookOptions<CreateOptionMutation, CreateOptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOptionMutation, CreateOptionMutationVariables>(CreateOptionDocument, options);
      }
export type CreateOptionMutationHookResult = ReturnType<typeof useCreateOptionMutation>;
export type CreateOptionMutationResult = Apollo.MutationResult<CreateOptionMutation>;
export type CreateOptionMutationOptions = Apollo.BaseMutationOptions<CreateOptionMutation, CreateOptionMutationVariables>;
export const DeleteOptionDocument = gql`
    mutation DeleteOption($input: DeleteOptionInput!) {
  deleteOption(input: $input) {
    ... on Option {
      id
      option_name
      last_modified_at
      last_modified_by
    }
    ... on ApiDeleteError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type DeleteOptionMutationFn = Apollo.MutationFunction<DeleteOptionMutation, DeleteOptionMutationVariables>;

/**
 * __useDeleteOptionMutation__
 *
 * To run a mutation, you first call `useDeleteOptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOptionMutation, { data, loading, error }] = useDeleteOptionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOptionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOptionMutation, DeleteOptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOptionMutation, DeleteOptionMutationVariables>(DeleteOptionDocument, options);
      }
export type DeleteOptionMutationHookResult = ReturnType<typeof useDeleteOptionMutation>;
export type DeleteOptionMutationResult = Apollo.MutationResult<DeleteOptionMutation>;
export type DeleteOptionMutationOptions = Apollo.BaseMutationOptions<DeleteOptionMutation, DeleteOptionMutationVariables>;
export const GetOptionDocument = gql`
    query GetOption($optionId: ID!) {
  option(id: $optionId) {
    ... on Option {
      id
      option_name
      created_at
      created_by
      last_modified_at
      last_modified_by
    }
    ... on ApiNotFoundError {
      message
      field
      value
      errors {
        field
        message
        value
      }
    }
  }
}
    `;

/**
 * __useGetOptionQuery__
 *
 * To run a query within a React component, call `useGetOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOptionQuery({
 *   variables: {
 *      optionId: // value for 'optionId'
 *   },
 * });
 */
export function useGetOptionQuery(baseOptions: Apollo.QueryHookOptions<GetOptionQuery, GetOptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOptionQuery, GetOptionQueryVariables>(GetOptionDocument, options);
      }
export function useGetOptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOptionQuery, GetOptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOptionQuery, GetOptionQueryVariables>(GetOptionDocument, options);
        }
export type GetOptionQueryHookResult = ReturnType<typeof useGetOptionQuery>;
export type GetOptionLazyQueryHookResult = ReturnType<typeof useGetOptionLazyQuery>;
export type GetOptionQueryResult = Apollo.QueryResult<GetOptionQuery, GetOptionQueryVariables>;
export const GetOptionsDocument = gql`
    query GetOptions {
  options {
    id
    option_name
    created_at
    created_by
    last_modified_at
    last_modified_by
    disaggregate_options {
      id
    }
  }
}
    `;

/**
 * __useGetOptionsQuery__
 *
 * To run a query within a React component, call `useGetOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOptionsQuery(baseOptions?: Apollo.QueryHookOptions<GetOptionsQuery, GetOptionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOptionsQuery, GetOptionsQueryVariables>(GetOptionsDocument, options);
      }
export function useGetOptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOptionsQuery, GetOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOptionsQuery, GetOptionsQueryVariables>(GetOptionsDocument, options);
        }
export type GetOptionsQueryHookResult = ReturnType<typeof useGetOptionsQuery>;
export type GetOptionsLazyQueryHookResult = ReturnType<typeof useGetOptionsLazyQuery>;
export type GetOptionsQueryResult = Apollo.QueryResult<GetOptionsQuery, GetOptionsQueryVariables>;
export const UpdateOptionDocument = gql`
    mutation UpdateOption($input: UpdateOptionInput!) {
  updateOption(input: $input) {
    ... on Option {
      id
      option_name
      last_modified_at
      last_modified_by
    }
    ... on ApiUpdateError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type UpdateOptionMutationFn = Apollo.MutationFunction<UpdateOptionMutation, UpdateOptionMutationVariables>;

/**
 * __useUpdateOptionMutation__
 *
 * To run a mutation, you first call `useUpdateOptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOptionMutation, { data, loading, error }] = useUpdateOptionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOptionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOptionMutation, UpdateOptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOptionMutation, UpdateOptionMutationVariables>(UpdateOptionDocument, options);
      }
export type UpdateOptionMutationHookResult = ReturnType<typeof useUpdateOptionMutation>;
export type UpdateOptionMutationResult = Apollo.MutationResult<UpdateOptionMutation>;
export type UpdateOptionMutationOptions = Apollo.BaseMutationOptions<UpdateOptionMutation, UpdateOptionMutationVariables>;
export const UpdateDisaggregateDocument = gql`
    mutation UpdateDisaggregate($input: UpdateDisaggregateInput!) {
  updateDisaggregate(input: $input) {
    ... on Disaggregate {
      id
      type
      name
      last_modified_at
      last_modified_by
    }
    ... on ApiUpdateError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type UpdateDisaggregateMutationFn = Apollo.MutationFunction<UpdateDisaggregateMutation, UpdateDisaggregateMutationVariables>;

/**
 * __useUpdateDisaggregateMutation__
 *
 * To run a mutation, you first call `useUpdateDisaggregateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDisaggregateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDisaggregateMutation, { data, loading, error }] = useUpdateDisaggregateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDisaggregateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDisaggregateMutation, UpdateDisaggregateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDisaggregateMutation, UpdateDisaggregateMutationVariables>(UpdateDisaggregateDocument, options);
      }
export type UpdateDisaggregateMutationHookResult = ReturnType<typeof useUpdateDisaggregateMutation>;
export type UpdateDisaggregateMutationResult = Apollo.MutationResult<UpdateDisaggregateMutation>;
export type UpdateDisaggregateMutationOptions = Apollo.BaseMutationOptions<UpdateDisaggregateMutation, UpdateDisaggregateMutationVariables>;
export const CreateDistrictDocument = gql`
    mutation CreateDistrict($input: CreateDistrictInput!) {
  createDistrict(input: $input) {
    ... on District {
      id
      code
      name
      created_at
      created_by
      last_modified_at
      last_modified_by
    }
    ... on ApiCreateError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type CreateDistrictMutationFn = Apollo.MutationFunction<CreateDistrictMutation, CreateDistrictMutationVariables>;

/**
 * __useCreateDistrictMutation__
 *
 * To run a mutation, you first call `useCreateDistrictMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDistrictMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDistrictMutation, { data, loading, error }] = useCreateDistrictMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDistrictMutation(baseOptions?: Apollo.MutationHookOptions<CreateDistrictMutation, CreateDistrictMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDistrictMutation, CreateDistrictMutationVariables>(CreateDistrictDocument, options);
      }
export type CreateDistrictMutationHookResult = ReturnType<typeof useCreateDistrictMutation>;
export type CreateDistrictMutationResult = Apollo.MutationResult<CreateDistrictMutation>;
export type CreateDistrictMutationOptions = Apollo.BaseMutationOptions<CreateDistrictMutation, CreateDistrictMutationVariables>;
export const DeleteDistrictDocument = gql`
    mutation DeleteDistrict($input: DeleteDistrictInput!) {
  deleteDistrict(input: $input) {
    ... on District {
      id
      code
      name
      last_modified_at
      last_modified_by
    }
    ... on ApiDeleteError {
      message
      field
      value
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type DeleteDistrictMutationFn = Apollo.MutationFunction<DeleteDistrictMutation, DeleteDistrictMutationVariables>;

/**
 * __useDeleteDistrictMutation__
 *
 * To run a mutation, you first call `useDeleteDistrictMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDistrictMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDistrictMutation, { data, loading, error }] = useDeleteDistrictMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteDistrictMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDistrictMutation, DeleteDistrictMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDistrictMutation, DeleteDistrictMutationVariables>(DeleteDistrictDocument, options);
      }
export type DeleteDistrictMutationHookResult = ReturnType<typeof useDeleteDistrictMutation>;
export type DeleteDistrictMutationResult = Apollo.MutationResult<DeleteDistrictMutation>;
export type DeleteDistrictMutationOptions = Apollo.BaseMutationOptions<DeleteDistrictMutation, DeleteDistrictMutationVariables>;
export const GetDistrictsDocument = gql`
    query GetDistricts($provinceId: ID!) {
  districts(province_id: $provinceId) {
    id
    code
    name
    created_at
    created_by
    last_modified_at
    last_modified_by
    province_id
    residences {
      id
      name
      cost_classification
    }
  }
}
    `;

/**
 * __useGetDistrictsQuery__
 *
 * To run a query within a React component, call `useGetDistrictsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDistrictsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDistrictsQuery({
 *   variables: {
 *      provinceId: // value for 'provinceId'
 *   },
 * });
 */
export function useGetDistrictsQuery(baseOptions: Apollo.QueryHookOptions<GetDistrictsQuery, GetDistrictsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDistrictsQuery, GetDistrictsQueryVariables>(GetDistrictsDocument, options);
      }
export function useGetDistrictsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDistrictsQuery, GetDistrictsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDistrictsQuery, GetDistrictsQueryVariables>(GetDistrictsDocument, options);
        }
export type GetDistrictsQueryHookResult = ReturnType<typeof useGetDistrictsQuery>;
export type GetDistrictsLazyQueryHookResult = ReturnType<typeof useGetDistrictsLazyQuery>;
export type GetDistrictsQueryResult = Apollo.QueryResult<GetDistrictsQuery, GetDistrictsQueryVariables>;
export const UpdateDistrictDocument = gql`
    mutation UpdateDistrict($input: UpdateDistrictInput!) {
  updateDistrict(input: $input) {
    ... on District {
      id
      code
      name
      last_modified_at
      last_modified_by
    }
    ... on ApiUpdateError {
      message
      field
      value
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type UpdateDistrictMutationFn = Apollo.MutationFunction<UpdateDistrictMutation, UpdateDistrictMutationVariables>;

/**
 * __useUpdateDistrictMutation__
 *
 * To run a mutation, you first call `useUpdateDistrictMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDistrictMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDistrictMutation, { data, loading, error }] = useUpdateDistrictMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDistrictMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDistrictMutation, UpdateDistrictMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDistrictMutation, UpdateDistrictMutationVariables>(UpdateDistrictDocument, options);
      }
export type UpdateDistrictMutationHookResult = ReturnType<typeof useUpdateDistrictMutation>;
export type UpdateDistrictMutationResult = Apollo.MutationResult<UpdateDistrictMutation>;
export type UpdateDistrictMutationOptions = Apollo.BaseMutationOptions<UpdateDistrictMutation, UpdateDistrictMutationVariables>;
export const GetCountriesDocument = gql`
    query GetCountries {
  countries {
    name
    id
    code
    flag
    created_at
    created_by
    last_modified_at
    last_modified_by
    provinces {
      name
      code
      id
      created_at
      created_by
      last_modified_at
      last_modified_by
      districts {
        id
        code
        name
        created_at
        created_by
        last_modified_at
        last_modified_by
      }
    }
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
export const GetCountryDocument = gql`
    query GetCountry($countryId: ID!) {
  country(id: $countryId) {
    ... on Country {
      name
      code
      created_by
      created_at
    }
    ... on ApiNotFoundError {
      message
      field
      value
      errors {
        field
        value
        message
      }
    }
  }
}
    `;

/**
 * __useGetCountryQuery__
 *
 * To run a query within a React component, call `useGetCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryQuery({
 *   variables: {
 *      countryId: // value for 'countryId'
 *   },
 * });
 */
export function useGetCountryQuery(baseOptions: Apollo.QueryHookOptions<GetCountryQuery, GetCountryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountryQuery, GetCountryQueryVariables>(GetCountryDocument, options);
      }
export function useGetCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountryQuery, GetCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountryQuery, GetCountryQueryVariables>(GetCountryDocument, options);
        }
export type GetCountryQueryHookResult = ReturnType<typeof useGetCountryQuery>;
export type GetCountryLazyQueryHookResult = ReturnType<typeof useGetCountryLazyQuery>;
export type GetCountryQueryResult = Apollo.QueryResult<GetCountryQuery, GetCountryQueryVariables>;
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
        country_id
        country {
          code
          id
          name
        }
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
export const GetUserDocument = gql`
    query getUser($userId: ID!) {
  user(id: $userId) {
    ... on User {
      id
      email
      first_name
      last_name
      disabled
      last_login
      master_support
      hashed_confirmation_token
      hashed_password_reset_token
      password_reset_email_status
      confirmed_at
      created_at
      created_by
      last_modified_at
      last_modified_by
      theme
    }
    ... on ApiNotFoundError {
      message
      errors {
        field
        message
        value
      }
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const CreateIndicatorUnitDocument = gql`
    mutation CreateIndicatorUnit($input: CreateIndicatorUnitInput!) {
  createIndicatorUnit(input: $input) {
    __typename
    ... on ApiCreateError {
      message
      field
      value
      errors {
        field
        message
        value
      }
    }
    ... on IndicatorUnit {
      id
      unit
      display_name
      created_at
      created_by
      last_modified_at
      last_modified_by
    }
  }
}
    `;
export type CreateIndicatorUnitMutationFn = Apollo.MutationFunction<CreateIndicatorUnitMutation, CreateIndicatorUnitMutationVariables>;

/**
 * __useCreateIndicatorUnitMutation__
 *
 * To run a mutation, you first call `useCreateIndicatorUnitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIndicatorUnitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIndicatorUnitMutation, { data, loading, error }] = useCreateIndicatorUnitMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateIndicatorUnitMutation(baseOptions?: Apollo.MutationHookOptions<CreateIndicatorUnitMutation, CreateIndicatorUnitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateIndicatorUnitMutation, CreateIndicatorUnitMutationVariables>(CreateIndicatorUnitDocument, options);
      }
export type CreateIndicatorUnitMutationHookResult = ReturnType<typeof useCreateIndicatorUnitMutation>;
export type CreateIndicatorUnitMutationResult = Apollo.MutationResult<CreateIndicatorUnitMutation>;
export type CreateIndicatorUnitMutationOptions = Apollo.BaseMutationOptions<CreateIndicatorUnitMutation, CreateIndicatorUnitMutationVariables>;
export const DeleteIndicatorUnitDocument = gql`
    mutation DeleteIndicatorUnit($input: DeleteIndicatorUnitInput!) {
  deleteIndicatorUnit(input: $input) {
    ... on IndicatorUnit {
      id
      last_modified_by
      last_modified_at
    }
    ... on ApiDeleteError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type DeleteIndicatorUnitMutationFn = Apollo.MutationFunction<DeleteIndicatorUnitMutation, DeleteIndicatorUnitMutationVariables>;

/**
 * __useDeleteIndicatorUnitMutation__
 *
 * To run a mutation, you first call `useDeleteIndicatorUnitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIndicatorUnitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIndicatorUnitMutation, { data, loading, error }] = useDeleteIndicatorUnitMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteIndicatorUnitMutation(baseOptions?: Apollo.MutationHookOptions<DeleteIndicatorUnitMutation, DeleteIndicatorUnitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteIndicatorUnitMutation, DeleteIndicatorUnitMutationVariables>(DeleteIndicatorUnitDocument, options);
      }
export type DeleteIndicatorUnitMutationHookResult = ReturnType<typeof useDeleteIndicatorUnitMutation>;
export type DeleteIndicatorUnitMutationResult = Apollo.MutationResult<DeleteIndicatorUnitMutation>;
export type DeleteIndicatorUnitMutationOptions = Apollo.BaseMutationOptions<DeleteIndicatorUnitMutation, DeleteIndicatorUnitMutationVariables>;
export const GetIndicatorUnitDocument = gql`
    query GetIndicatorUnit($indicatorUnitId: ID!) {
  indicator_unit(id: $indicatorUnitId) {
    ... on IndicatorUnit {
      id
      display_name
      unit
      created_at
      created_by
      last_modified_at
      last_modified_by
      indicators {
        id
      }
    }
    ... on ApiNotFoundError {
      message
      value
      field
      errors {
        field
        value
        message
      }
    }
  }
}
    `;

/**
 * __useGetIndicatorUnitQuery__
 *
 * To run a query within a React component, call `useGetIndicatorUnitQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIndicatorUnitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIndicatorUnitQuery({
 *   variables: {
 *      indicatorUnitId: // value for 'indicatorUnitId'
 *   },
 * });
 */
export function useGetIndicatorUnitQuery(baseOptions: Apollo.QueryHookOptions<GetIndicatorUnitQuery, GetIndicatorUnitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIndicatorUnitQuery, GetIndicatorUnitQueryVariables>(GetIndicatorUnitDocument, options);
      }
export function useGetIndicatorUnitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIndicatorUnitQuery, GetIndicatorUnitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIndicatorUnitQuery, GetIndicatorUnitQueryVariables>(GetIndicatorUnitDocument, options);
        }
export type GetIndicatorUnitQueryHookResult = ReturnType<typeof useGetIndicatorUnitQuery>;
export type GetIndicatorUnitLazyQueryHookResult = ReturnType<typeof useGetIndicatorUnitLazyQuery>;
export type GetIndicatorUnitQueryResult = Apollo.QueryResult<GetIndicatorUnitQuery, GetIndicatorUnitQueryVariables>;
export const GetIndicatorUnitsDocument = gql`
    query GetIndicatorUnits {
  indicator_units {
    id
    unit
    display_name
    created_at
    created_by
    last_modified_by
    last_modified_at
    indicators {
      id
    }
  }
}
    `;

/**
 * __useGetIndicatorUnitsQuery__
 *
 * To run a query within a React component, call `useGetIndicatorUnitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIndicatorUnitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIndicatorUnitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIndicatorUnitsQuery(baseOptions?: Apollo.QueryHookOptions<GetIndicatorUnitsQuery, GetIndicatorUnitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIndicatorUnitsQuery, GetIndicatorUnitsQueryVariables>(GetIndicatorUnitsDocument, options);
      }
export function useGetIndicatorUnitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIndicatorUnitsQuery, GetIndicatorUnitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIndicatorUnitsQuery, GetIndicatorUnitsQueryVariables>(GetIndicatorUnitsDocument, options);
        }
export type GetIndicatorUnitsQueryHookResult = ReturnType<typeof useGetIndicatorUnitsQuery>;
export type GetIndicatorUnitsLazyQueryHookResult = ReturnType<typeof useGetIndicatorUnitsLazyQuery>;
export type GetIndicatorUnitsQueryResult = Apollo.QueryResult<GetIndicatorUnitsQuery, GetIndicatorUnitsQueryVariables>;
export const UpdateIndicatorUnitDocument = gql`
    mutation UpdateIndicatorUnit($input: UpdateIndicatorUnitInput!) {
  updateIndicatorUnit(input: $input) {
    ... on IndicatorUnit {
      id
      unit
      display_name
      last_modified_at
      last_modified_by
    }
    ... on ApiUpdateError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type UpdateIndicatorUnitMutationFn = Apollo.MutationFunction<UpdateIndicatorUnitMutation, UpdateIndicatorUnitMutationVariables>;

/**
 * __useUpdateIndicatorUnitMutation__
 *
 * To run a mutation, you first call `useUpdateIndicatorUnitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIndicatorUnitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIndicatorUnitMutation, { data, loading, error }] = useUpdateIndicatorUnitMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateIndicatorUnitMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIndicatorUnitMutation, UpdateIndicatorUnitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIndicatorUnitMutation, UpdateIndicatorUnitMutationVariables>(UpdateIndicatorUnitDocument, options);
      }
export type UpdateIndicatorUnitMutationHookResult = ReturnType<typeof useUpdateIndicatorUnitMutation>;
export type UpdateIndicatorUnitMutationResult = Apollo.MutationResult<UpdateIndicatorUnitMutation>;
export type UpdateIndicatorUnitMutationOptions = Apollo.BaseMutationOptions<UpdateIndicatorUnitMutation, UpdateIndicatorUnitMutationVariables>;
export const CreateIndicatorDocument = gql`
    mutation CreateIndicator($input: CreateIndicatorInput!) {
  createIndicator(input: $input) {
    __typename
    ... on ApiCreateError {
      message
      field
      value
      errors {
        field
        value
        message
      }
    }
    ... on Indicator {
      id
      description
      category
      contributing_organisation
      indicator_number
      type
      created_at
      created_by
      last_modified_at
      last_modified_by
      indicator_unit_id
      indicator_unit {
        id
      }
      indicator_organisations {
        id
      }
      report_template_id
      report_template {
        id
      }
    }
  }
}
    `;
export type CreateIndicatorMutationFn = Apollo.MutationFunction<CreateIndicatorMutation, CreateIndicatorMutationVariables>;

/**
 * __useCreateIndicatorMutation__
 *
 * To run a mutation, you first call `useCreateIndicatorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIndicatorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIndicatorMutation, { data, loading, error }] = useCreateIndicatorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateIndicatorMutation(baseOptions?: Apollo.MutationHookOptions<CreateIndicatorMutation, CreateIndicatorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateIndicatorMutation, CreateIndicatorMutationVariables>(CreateIndicatorDocument, options);
      }
export type CreateIndicatorMutationHookResult = ReturnType<typeof useCreateIndicatorMutation>;
export type CreateIndicatorMutationResult = Apollo.MutationResult<CreateIndicatorMutation>;
export type CreateIndicatorMutationOptions = Apollo.BaseMutationOptions<CreateIndicatorMutation, CreateIndicatorMutationVariables>;
export const DeleteIndicatorDocument = gql`
    mutation DeleteIndicator($input: DeleteIndicatorInput!) {
  deleteIndicator(input: $input) {
    ... on Indicator {
      id
      last_modified_at
      last_modified_by
    }
    ... on ApiDeleteError {
      message
      field
      value
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type DeleteIndicatorMutationFn = Apollo.MutationFunction<DeleteIndicatorMutation, DeleteIndicatorMutationVariables>;

/**
 * __useDeleteIndicatorMutation__
 *
 * To run a mutation, you first call `useDeleteIndicatorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIndicatorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIndicatorMutation, { data, loading, error }] = useDeleteIndicatorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteIndicatorMutation(baseOptions?: Apollo.MutationHookOptions<DeleteIndicatorMutation, DeleteIndicatorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteIndicatorMutation, DeleteIndicatorMutationVariables>(DeleteIndicatorDocument, options);
      }
export type DeleteIndicatorMutationHookResult = ReturnType<typeof useDeleteIndicatorMutation>;
export type DeleteIndicatorMutationResult = Apollo.MutationResult<DeleteIndicatorMutation>;
export type DeleteIndicatorMutationOptions = Apollo.BaseMutationOptions<DeleteIndicatorMutation, DeleteIndicatorMutationVariables>;
export const GetIndicatorDocument = gql`
    query GetIndicator($indicatorId: ID!) {
  indicator(id: $indicatorId) {
    ... on Indicator {
      id
      description
      category
      contributing_organisation
      indicator_number
      type
      created_at
      created_by
      last_modified_at
      last_modified_by
      indicator_unit_id
      indicator_unit {
        id
      }
      indicator_organisations {
        id
      }
      report_template_id
      report_template {
        id
      }
    }
    ... on ApiNotFoundError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;

/**
 * __useGetIndicatorQuery__
 *
 * To run a query within a React component, call `useGetIndicatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIndicatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIndicatorQuery({
 *   variables: {
 *      indicatorId: // value for 'indicatorId'
 *   },
 * });
 */
export function useGetIndicatorQuery(baseOptions: Apollo.QueryHookOptions<GetIndicatorQuery, GetIndicatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIndicatorQuery, GetIndicatorQueryVariables>(GetIndicatorDocument, options);
      }
export function useGetIndicatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIndicatorQuery, GetIndicatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIndicatorQuery, GetIndicatorQueryVariables>(GetIndicatorDocument, options);
        }
export type GetIndicatorQueryHookResult = ReturnType<typeof useGetIndicatorQuery>;
export type GetIndicatorLazyQueryHookResult = ReturnType<typeof useGetIndicatorLazyQuery>;
export type GetIndicatorQueryResult = Apollo.QueryResult<GetIndicatorQuery, GetIndicatorQueryVariables>;
export const GetIndicatorsDocument = gql`
    query GetIndicators {
  indicators {
    id
    description
    category
    contributing_organisation
    indicator_number
    type
    created_at
    created_by
    last_modified_at
    last_modified_by
    indicator_unit_id
    indicator_unit {
      id
      display_name
    }
    indicator_organisations {
      id
    }
    report_template_id
    report_template {
      id
      name
    }
  }
}
    `;

/**
 * __useGetIndicatorsQuery__
 *
 * To run a query within a React component, call `useGetIndicatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIndicatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIndicatorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIndicatorsQuery(baseOptions?: Apollo.QueryHookOptions<GetIndicatorsQuery, GetIndicatorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIndicatorsQuery, GetIndicatorsQueryVariables>(GetIndicatorsDocument, options);
      }
export function useGetIndicatorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIndicatorsQuery, GetIndicatorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIndicatorsQuery, GetIndicatorsQueryVariables>(GetIndicatorsDocument, options);
        }
export type GetIndicatorsQueryHookResult = ReturnType<typeof useGetIndicatorsQuery>;
export type GetIndicatorsLazyQueryHookResult = ReturnType<typeof useGetIndicatorsLazyQuery>;
export type GetIndicatorsQueryResult = Apollo.QueryResult<GetIndicatorsQuery, GetIndicatorsQueryVariables>;
export const UpdateIndicatorDocument = gql`
    mutation UpdateIndicator($input: UpdateIndicatorInput!) {
  updateIndicator(input: $input) {
    ... on Indicator {
      id
      description
      category
      contributing_organisation
      indicator_number
      type
      last_modified_at
      last_modified_by
      indicator_unit_id
      indicator_unit {
        id
      }
      report_template_id
      report_template {
        id
      }
    }
    ... on ApiUpdateError {
      message
      field
      value
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type UpdateIndicatorMutationFn = Apollo.MutationFunction<UpdateIndicatorMutation, UpdateIndicatorMutationVariables>;

/**
 * __useUpdateIndicatorMutation__
 *
 * To run a mutation, you first call `useUpdateIndicatorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIndicatorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIndicatorMutation, { data, loading, error }] = useUpdateIndicatorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateIndicatorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIndicatorMutation, UpdateIndicatorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIndicatorMutation, UpdateIndicatorMutationVariables>(UpdateIndicatorDocument, options);
      }
export type UpdateIndicatorMutationHookResult = ReturnType<typeof useUpdateIndicatorMutation>;
export type UpdateIndicatorMutationResult = Apollo.MutationResult<UpdateIndicatorMutation>;
export type UpdateIndicatorMutationOptions = Apollo.BaseMutationOptions<UpdateIndicatorMutation, UpdateIndicatorMutationVariables>;
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
export const OnPasswordResetEmailDocument = gql`
    subscription OnPasswordResetEmail {
  passwordRequestEmailCompleted {
    id
    email
    hashed_password_reset_token
    password_reset_email_status
    last_modified_at
    last_modified_by
  }
}
    `;

/**
 * __useOnPasswordResetEmailSubscription__
 *
 * To run a query within a React component, call `useOnPasswordResetEmailSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnPasswordResetEmailSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnPasswordResetEmailSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnPasswordResetEmailSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnPasswordResetEmailSubscription, OnPasswordResetEmailSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnPasswordResetEmailSubscription, OnPasswordResetEmailSubscriptionVariables>(OnPasswordResetEmailDocument, options);
      }
export type OnPasswordResetEmailSubscriptionHookResult = ReturnType<typeof useOnPasswordResetEmailSubscription>;
export type OnPasswordResetEmailSubscriptionResult = Apollo.SubscriptionResult<OnPasswordResetEmailSubscription>;
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
export const CreateProvinceDocument = gql`
    mutation CreateProvince($input: CreateProvinceInput!) {
  createProvince(input: $input) {
    ... on Province {
      id
      code
      name
      created_at
      created_by
      last_modified_at
      last_modified_by
    }
    ... on ApiCreateError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type CreateProvinceMutationFn = Apollo.MutationFunction<CreateProvinceMutation, CreateProvinceMutationVariables>;

/**
 * __useCreateProvinceMutation__
 *
 * To run a mutation, you first call `useCreateProvinceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProvinceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProvinceMutation, { data, loading, error }] = useCreateProvinceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProvinceMutation(baseOptions?: Apollo.MutationHookOptions<CreateProvinceMutation, CreateProvinceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProvinceMutation, CreateProvinceMutationVariables>(CreateProvinceDocument, options);
      }
export type CreateProvinceMutationHookResult = ReturnType<typeof useCreateProvinceMutation>;
export type CreateProvinceMutationResult = Apollo.MutationResult<CreateProvinceMutation>;
export type CreateProvinceMutationOptions = Apollo.BaseMutationOptions<CreateProvinceMutation, CreateProvinceMutationVariables>;
export const DeleteProvinceDocument = gql`
    mutation DeleteProvince($input: DeleteProvinceInput!) {
  deleteProvince(input: $input) {
    ... on Province {
      id
      code
      name
      last_modified_at
      last_modified_by
    }
    ... on ApiDeleteError {
      message
      field
      value
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type DeleteProvinceMutationFn = Apollo.MutationFunction<DeleteProvinceMutation, DeleteProvinceMutationVariables>;

/**
 * __useDeleteProvinceMutation__
 *
 * To run a mutation, you first call `useDeleteProvinceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProvinceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProvinceMutation, { data, loading, error }] = useDeleteProvinceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProvinceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProvinceMutation, DeleteProvinceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProvinceMutation, DeleteProvinceMutationVariables>(DeleteProvinceDocument, options);
      }
export type DeleteProvinceMutationHookResult = ReturnType<typeof useDeleteProvinceMutation>;
export type DeleteProvinceMutationResult = Apollo.MutationResult<DeleteProvinceMutation>;
export type DeleteProvinceMutationOptions = Apollo.BaseMutationOptions<DeleteProvinceMutation, DeleteProvinceMutationVariables>;
export const GetProvincesDocument = gql`
    query GetProvinces($countryId: ID!) {
  provinces(country_id: $countryId) {
    id
    name
    code
    created_at
    created_by
    last_modified_at
    last_modified_by
    country_id
    country {
      id
      name
      code
    }
    districts {
      id
      code
      name
    }
  }
}
    `;

/**
 * __useGetProvincesQuery__
 *
 * To run a query within a React component, call `useGetProvincesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProvincesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProvincesQuery({
 *   variables: {
 *      countryId: // value for 'countryId'
 *   },
 * });
 */
export function useGetProvincesQuery(baseOptions: Apollo.QueryHookOptions<GetProvincesQuery, GetProvincesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProvincesQuery, GetProvincesQueryVariables>(GetProvincesDocument, options);
      }
export function useGetProvincesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProvincesQuery, GetProvincesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProvincesQuery, GetProvincesQueryVariables>(GetProvincesDocument, options);
        }
export type GetProvincesQueryHookResult = ReturnType<typeof useGetProvincesQuery>;
export type GetProvincesLazyQueryHookResult = ReturnType<typeof useGetProvincesLazyQuery>;
export type GetProvincesQueryResult = Apollo.QueryResult<GetProvincesQuery, GetProvincesQueryVariables>;
export const UpdateProvinceDocument = gql`
    mutation UpdateProvince($input: UpdateProvinceInput!) {
  updateProvince(input: $input) {
    ... on Province {
      id
      code
      name
      last_modified_at
      last_modified_by
    }
    ... on ApiUpdateError {
      message
      field
      value
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type UpdateProvinceMutationFn = Apollo.MutationFunction<UpdateProvinceMutation, UpdateProvinceMutationVariables>;

/**
 * __useUpdateProvinceMutation__
 *
 * To run a mutation, you first call `useUpdateProvinceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProvinceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProvinceMutation, { data, loading, error }] = useUpdateProvinceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProvinceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProvinceMutation, UpdateProvinceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProvinceMutation, UpdateProvinceMutationVariables>(UpdateProvinceDocument, options);
      }
export type UpdateProvinceMutationHookResult = ReturnType<typeof useUpdateProvinceMutation>;
export type UpdateProvinceMutationResult = Apollo.MutationResult<UpdateProvinceMutation>;
export type UpdateProvinceMutationOptions = Apollo.BaseMutationOptions<UpdateProvinceMutation, UpdateProvinceMutationVariables>;
export const GetReportTemplatesDocument = gql`
    query GetReportTemplates {
  report_templates {
    id
    name
    type
    window
    frequency
    icon
    created_at
    created_by
    last_modified_at
    last_modified_by
    indicators {
      id
    }
    organisation_report_templates {
      id
    }
  }
}
    `;

/**
 * __useGetReportTemplatesQuery__
 *
 * To run a query within a React component, call `useGetReportTemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReportTemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReportTemplatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetReportTemplatesQuery(baseOptions?: Apollo.QueryHookOptions<GetReportTemplatesQuery, GetReportTemplatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReportTemplatesQuery, GetReportTemplatesQueryVariables>(GetReportTemplatesDocument, options);
      }
export function useGetReportTemplatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReportTemplatesQuery, GetReportTemplatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReportTemplatesQuery, GetReportTemplatesQueryVariables>(GetReportTemplatesDocument, options);
        }
export type GetReportTemplatesQueryHookResult = ReturnType<typeof useGetReportTemplatesQuery>;
export type GetReportTemplatesLazyQueryHookResult = ReturnType<typeof useGetReportTemplatesLazyQuery>;
export type GetReportTemplatesQueryResult = Apollo.QueryResult<GetReportTemplatesQuery, GetReportTemplatesQueryVariables>;
export const RequestPasswordResetDocument = gql`
    mutation RequestPasswordReset($input: PasswordResetRequestInput!) {
  requestPasswordReset(input: $input) {
    ... on User {
      id
      email
      hashed_password_reset_token
      last_modified_at
      last_modified_by
    }
    ... on ApiUpdateError {
      message
      field
      value
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type RequestPasswordResetMutationFn = Apollo.MutationFunction<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>;

/**
 * __useRequestPasswordResetMutation__
 *
 * To run a mutation, you first call `useRequestPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestPasswordResetMutation, { data, loading, error }] = useRequestPasswordResetMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRequestPasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>(RequestPasswordResetDocument, options);
      }
export type RequestPasswordResetMutationHookResult = ReturnType<typeof useRequestPasswordResetMutation>;
export type RequestPasswordResetMutationResult = Apollo.MutationResult<RequestPasswordResetMutation>;
export type RequestPasswordResetMutationOptions = Apollo.BaseMutationOptions<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($input: PasswordResetInput!) {
  resetPassword(input: $input) {
    ... on User {
      id
      hashed_password_reset_token
      password_reset_email_status
      email
      last_modified_at
      last_modified_by
    }
    ... on ApiPasswordResetError {
      message
      field
      value
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const CreateResidenceDocument = gql`
    mutation CreateResidence($input: CreateResidenceInput!) {
  createResidence(input: $input) {
    ... on Residence {
      id
      name
      cost_classification
      district_id
      last_modified_at
      last_modified_by
      created_at
      created_by
    }
    ... on ApiCreateError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type CreateResidenceMutationFn = Apollo.MutationFunction<CreateResidenceMutation, CreateResidenceMutationVariables>;

/**
 * __useCreateResidenceMutation__
 *
 * To run a mutation, you first call `useCreateResidenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateResidenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createResidenceMutation, { data, loading, error }] = useCreateResidenceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateResidenceMutation(baseOptions?: Apollo.MutationHookOptions<CreateResidenceMutation, CreateResidenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateResidenceMutation, CreateResidenceMutationVariables>(CreateResidenceDocument, options);
      }
export type CreateResidenceMutationHookResult = ReturnType<typeof useCreateResidenceMutation>;
export type CreateResidenceMutationResult = Apollo.MutationResult<CreateResidenceMutation>;
export type CreateResidenceMutationOptions = Apollo.BaseMutationOptions<CreateResidenceMutation, CreateResidenceMutationVariables>;
export const DeleteResidenceDocument = gql`
    mutation DeleteResidence($input: DeleteResidenceInput!) {
  deleteResidence(input: $input) {
    ... on Residence {
      id
      last_modified_by
      last_modified_by
    }
    ... on ApiDeleteError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type DeleteResidenceMutationFn = Apollo.MutationFunction<DeleteResidenceMutation, DeleteResidenceMutationVariables>;

/**
 * __useDeleteResidenceMutation__
 *
 * To run a mutation, you first call `useDeleteResidenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteResidenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteResidenceMutation, { data, loading, error }] = useDeleteResidenceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteResidenceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteResidenceMutation, DeleteResidenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteResidenceMutation, DeleteResidenceMutationVariables>(DeleteResidenceDocument, options);
      }
export type DeleteResidenceMutationHookResult = ReturnType<typeof useDeleteResidenceMutation>;
export type DeleteResidenceMutationResult = Apollo.MutationResult<DeleteResidenceMutation>;
export type DeleteResidenceMutationOptions = Apollo.BaseMutationOptions<DeleteResidenceMutation, DeleteResidenceMutationVariables>;
export const GetResidenceDocument = gql`
    query GetResidence($residenceId: ID!) {
  residence(id: $residenceId) {
    ... on Residence {
      id
      cost_classification
      name
      district_id
      last_modified_at
      last_modified_by
      created_at
      created_by
      service_areas {
        id
        residence_id
        catchment_district_id
      }
    }
    ... on ApiNotFoundError {
      message
      field
      value
      errors {
        field
        message
        value
      }
    }
  }
}
    `;

/**
 * __useGetResidenceQuery__
 *
 * To run a query within a React component, call `useGetResidenceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResidenceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResidenceQuery({
 *   variables: {
 *      residenceId: // value for 'residenceId'
 *   },
 * });
 */
export function useGetResidenceQuery(baseOptions: Apollo.QueryHookOptions<GetResidenceQuery, GetResidenceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResidenceQuery, GetResidenceQueryVariables>(GetResidenceDocument, options);
      }
export function useGetResidenceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResidenceQuery, GetResidenceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResidenceQuery, GetResidenceQueryVariables>(GetResidenceDocument, options);
        }
export type GetResidenceQueryHookResult = ReturnType<typeof useGetResidenceQuery>;
export type GetResidenceLazyQueryHookResult = ReturnType<typeof useGetResidenceLazyQuery>;
export type GetResidenceQueryResult = Apollo.QueryResult<GetResidenceQuery, GetResidenceQueryVariables>;
export const GetResidencesDocument = gql`
    query GetResidences($districtId: ID!) {
  residences(district_id: $districtId) {
    id
    cost_classification
    name
    district_id
    district {
      id
      code
      name
      province {
        id
        code
        name
        country {
          id
          code
          name
        }
      }
    }
    last_modified_at
    last_modified_by
    created_at
    created_by
    service_areas {
      id
      residence_id
      catchment_district_id
    }
  }
}
    `;

/**
 * __useGetResidencesQuery__
 *
 * To run a query within a React component, call `useGetResidencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResidencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResidencesQuery({
 *   variables: {
 *      districtId: // value for 'districtId'
 *   },
 * });
 */
export function useGetResidencesQuery(baseOptions: Apollo.QueryHookOptions<GetResidencesQuery, GetResidencesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResidencesQuery, GetResidencesQueryVariables>(GetResidencesDocument, options);
      }
export function useGetResidencesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResidencesQuery, GetResidencesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResidencesQuery, GetResidencesQueryVariables>(GetResidencesDocument, options);
        }
export type GetResidencesQueryHookResult = ReturnType<typeof useGetResidencesQuery>;
export type GetResidencesLazyQueryHookResult = ReturnType<typeof useGetResidencesLazyQuery>;
export type GetResidencesQueryResult = Apollo.QueryResult<GetResidencesQuery, GetResidencesQueryVariables>;
export const UpdateResidenceDocument = gql`
    mutation UpdateResidence($input: UpdateResidenceInput!) {
  updateResidence(input: $input) {
    ... on Residence {
      id
      name
      cost_classification
      last_modified_by
      last_modified_at
    }
    ... on ApiUpdateError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type UpdateResidenceMutationFn = Apollo.MutationFunction<UpdateResidenceMutation, UpdateResidenceMutationVariables>;

/**
 * __useUpdateResidenceMutation__
 *
 * To run a mutation, you first call `useUpdateResidenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateResidenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateResidenceMutation, { data, loading, error }] = useUpdateResidenceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateResidenceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateResidenceMutation, UpdateResidenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateResidenceMutation, UpdateResidenceMutationVariables>(UpdateResidenceDocument, options);
      }
export type UpdateResidenceMutationHookResult = ReturnType<typeof useUpdateResidenceMutation>;
export type UpdateResidenceMutationResult = Apollo.MutationResult<UpdateResidenceMutation>;
export type UpdateResidenceMutationOptions = Apollo.BaseMutationOptions<UpdateResidenceMutation, UpdateResidenceMutationVariables>;
export const SendUserInvitationEmailDocument = gql`
    mutation SendUserInvitationEmail($input: SendInvitationEmailInput!) {
  sendUserInvitationEmail(input: $input) {
    ... on UserInvitation {
      id
      email_status
    }
    ... on ApiUpdateError {
      message
    }
  }
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
export const UpdateCountryDocument = gql`
    mutation UpdateCountry($input: UpdateCountryInput!) {
  updateCountry(input: $input) {
    ... on Country {
      id
      code
      name
      last_modified_at
      last_modified_by
    }
    ... on ApiUpdateError {
      message
      value
      field
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type UpdateCountryMutationFn = Apollo.MutationFunction<UpdateCountryMutation, UpdateCountryMutationVariables>;

/**
 * __useUpdateCountryMutation__
 *
 * To run a mutation, you first call `useUpdateCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCountryMutation, { data, loading, error }] = useUpdateCountryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCountryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCountryMutation, UpdateCountryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCountryMutation, UpdateCountryMutationVariables>(UpdateCountryDocument, options);
      }
export type UpdateCountryMutationHookResult = ReturnType<typeof useUpdateCountryMutation>;
export type UpdateCountryMutationResult = Apollo.MutationResult<UpdateCountryMutation>;
export type UpdateCountryMutationOptions = Apollo.BaseMutationOptions<UpdateCountryMutation, UpdateCountryMutationVariables>;
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
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    ... on User {
      id
      first_name
      last_name
      theme
      last_modified_at
      last_modified_by
    }
    ... on ApiCreateError {
      message
      field
      value
      errors {
        field
        message
        value
      }
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
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
export type ApiDeleteErrorKeySpecifier = ('message' | 'field' | 'value' | 'errors' | ApiDeleteErrorKeySpecifier)[];
export type ApiDeleteErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiErrorKeySpecifier = ('message' | ApiErrorKeySpecifier)[];
export type ApiErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiLoginErrorKeySpecifier = ('message' | 'field' | 'value' | 'errors' | ApiLoginErrorKeySpecifier)[];
export type ApiLoginErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiNotFoundErrorKeySpecifier = ('message' | 'field' | 'value' | 'errors' | ApiNotFoundErrorKeySpecifier)[];
export type ApiNotFoundErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiOperationErrorKeySpecifier = ('message' | 'field' | 'value' | 'errors' | ApiOperationErrorKeySpecifier)[];
export type ApiOperationErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiPasswordResetErrorKeySpecifier = ('message' | 'field' | 'value' | 'errors' | ApiPasswordResetErrorKeySpecifier)[];
export type ApiPasswordResetErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiUpdateErrorKeySpecifier = ('message' | 'field' | 'value' | 'errors' | ApiUpdateErrorKeySpecifier)[];
export type ApiUpdateErrorFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type IndicatorUnitKeySpecifier = ('id' | 'unit' | 'display_name' | 'indicators' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | IndicatorUnitKeySpecifier)[];
export type IndicatorUnitFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	unit?: FieldPolicy<any> | FieldReadFunction<any>,
	display_name?: FieldPolicy<any> | FieldReadFunction<any>,
	indicators?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type MutationKeySpecifier = ('createCountry' | 'deleteCountry' | 'updateCountry' | 'createProvince' | 'deleteProvince' | 'updateProvince' | 'createDistrict' | 'updateDistrict' | 'deleteDistrict' | 'createOrganisation' | 'updateOrganisation' | 'deleteOrganisation' | 'createCatchmentProvince' | 'updateCatchmentProvince' | 'deleteCatchmentProvince' | 'createCatchmentDistrict' | 'updateCatchmentDistrict' | 'deleteCatchmentDistrict' | 'createUser' | 'createInvitedUser' | 'deleteUser' | 'disableUser' | 'updateUser' | 'login' | 'requestPasswordReset' | 'cancelRequestPasswordReset' | 'resetPassword' | 'changePassword' | 'createOrganisationUser' | 'updateOrganisationUser' | 'setUserDefaultProject' | 'deleteOrganisationUser' | 'createDistrictUser' | 'setUserDefaultDistrict' | 'updateUserRolesForDistrict' | 'deleteDistrictUser' | 'createUserInvitation' | 'sendUserInvitationEmail' | 'deleteUserInvitation' | 'createResidence' | 'updateResidence' | 'deleteResidence' | 'createServiceArea' | 'deleteServiceArea' | 'createWaterTreatmentPlant' | 'updateWaterTreatmentPlant' | 'deleteWaterTreatmentPlants' | 'createWaterStorageTank' | 'updateWaterStorageTank' | 'deleteWaterStorageTank' | 'createWaterProductionSite' | 'updateWaterProductionSite' | 'deleteWaterProductionSite' | 'createWaterNetwork' | 'updateWaterNetwork' | 'deleteWaterNetwork' | 'createServiceAreaWaterConnection' | 'updateServiceAreaWaterConnection' | 'deleteServiceAreaWaterConnection' | 'createSewerTreatmentPlant' | 'updateSewerTreatmentPlant' | 'deleteSewerTreatmentPlants' | 'createSewerNetwork' | 'updateSewerNetwork' | 'deleteSewerNetwork' | 'createServiceAreaSewerConnection' | 'updateServiceAreaSewerConnection' | 'deleteServiceAreaSewerConnection' | 'createDisaggregateOption' | 'createDisaggregateOptions' | 'deleteDisaggregateOption' | 'createDisaggregate' | 'createDisaggregateWithOptions' | 'updateDisaggregate' | 'deleteDisaggregate' | 'createIndicatorUnit' | 'updateIndicatorUnit' | 'deleteIndicatorUnit' | 'createIndicator' | 'updateIndicator' | 'deleteIndicator' | 'createReport' | 'updateReport' | 'deleteReport' | 'createOrganisationReportTemplate' | 'createOrganisationReportTemplates' | 'deleteOrganisationReportTemplate' | 'createReportTemplate' | 'updateReportTemplate' | 'deleteReportTemplate' | 'createOrganisationIndicator' | 'createOrganisationIndicators' | 'deleteOrganisationIndicator' | 'createIndicatorDisaggregate' | 'createIndicatorDisaggregates' | 'deleteIndicatorDisaggregate' | 'createOption' | 'updateOption' | 'deleteOption' | 'createIndicatorDisaggregateReport' | 'updateIndicatorDisaggregateReport' | 'deleteIndicatorDisaggregateReport' | MutationKeySpecifier)[];
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
	cancelRequestPasswordReset?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	changePassword?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type SubscriptionKeySpecifier = ('passwordRequestEmailCompleted' | 'userInvitationUpdated' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	passwordRequestEmailCompleted?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type UserKeySpecifier = ('id' | 'first_name' | 'last_name' | 'email' | 'disabled' | 'master_support' | 'user_organisations' | 'user_default_organisation' | 'hashed_confirmation_token' | 'confirmed_at' | 'hashed_password_reset_token' | 'password_reset_email_status' | 'last_login' | 'theme' | 'created_at' | 'created_by' | 'last_modified_at' | 'last_modified_by' | UserKeySpecifier)[];
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
	password_reset_email_status?: FieldPolicy<any> | FieldReadFunction<any>,
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