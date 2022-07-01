import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLContext } from '../../src/utils';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  errors?: Maybe<Array<ErrorField>>;
  message: Scalars['String'];
};

export type ApiDeleteError = ApiError & {
  __typename?: 'ApiDeleteError';
  errors?: Maybe<Array<ErrorField>>;
  message: Scalars['String'];
};

export type ApiError = {
  message: Scalars['String'];
};

export type ApiLoginError = ApiError & {
  __typename?: 'ApiLoginError';
  errors?: Maybe<Array<ErrorField>>;
  message: Scalars['String'];
};

export type ApiNotFoundError = ApiError & {
  __typename?: 'ApiNotFoundError';
  errors?: Maybe<Array<ErrorField>>;
  message: Scalars['String'];
};

export type ApiOperationError = ApiError & {
  __typename?: 'ApiOperationError';
  errors?: Maybe<Array<ErrorField>>;
  message: Scalars['String'];
};

export type ApiPasswordResetError = ApiError & {
  __typename?: 'ApiPasswordResetError';
  errors?: Maybe<Array<ErrorField>>;
  message: Scalars['String'];
};

export type ApiUpdateError = ApiError & {
  __typename?: 'ApiUpdateError';
  errors?: Maybe<Array<ErrorField>>;
  message: Scalars['String'];
};

export type CatchmentDistrict = {
  __typename?: 'CatchmentDistrict';
  catchment_province?: Maybe<CatchmentProvinceResult>;
  catchment_province_id: Scalars['String'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  disabled: Scalars['Boolean'];
  district?: Maybe<DistrictResult>;
  district_id: Scalars['String'];
  district_users?: Maybe<Array<DistrictUser>>;
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  reports?: Maybe<Array<Report>>;
  service_areas?: Maybe<Array<ServiceArea>>;
  sewer_treatment_plants?: Maybe<Array<SewerTreatmentPlant>>;
  water_treatment_plants?: Maybe<Array<WaterTreatmentPlant>>;
};

export type CatchmentDistrictInput = {
  catchment_district_id: Scalars['ID'];
  roles: Array<DistrictUserRoleType>;
};

export type CatchmentDistrictResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | CatchmentDistrict;

export type CatchmentDistrictUpdateInput = {
  disabled: Scalars['Boolean'];
};

export type CatchmentProvince = {
  __typename?: 'CatchmentProvince';
  catchment_districts?: Maybe<Array<CatchmentDistrict>>;
  created_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['String']>;
  disabled: Scalars['Boolean'];
  id: Scalars['ID'];
  last_modified_at?: Maybe<Scalars['DateTime']>;
  last_modified_by?: Maybe<Scalars['String']>;
  organisation?: Maybe<OrganisationResult>;
  organisation_id: Scalars['String'];
  province?: Maybe<ProvinceResult>;
  province_id: Scalars['String'];
};

export type CatchmentProvinceResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | CatchmentProvince;

export type CatchmentProvinceUpdateInput = {
  disabled: Scalars['Boolean'];
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  flag?: Maybe<Scalars['Byte']>;
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  name: Scalars['String'];
  organisations?: Maybe<Array<Organisation>>;
  provinces?: Maybe<Array<Province>>;
};

export type CountryResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | Country;

export type CountryUpdateInput = {
  code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateCatchmentDistrictInput = {
  catchment_province_id: Scalars['String'];
  district_id: Scalars['String'];
};

export type CreateCatchmentProvinceInput = {
  organisation_id: Scalars['String'];
  province_id: Scalars['String'];
};

export type CreateCountryInput = {
  code: Scalars['String'];
  flag?: InputMaybe<Scalars['Byte']>;
  name: Scalars['String'];
  organisations?: InputMaybe<Array<CreateOrganisationInput>>;
  provinces?: InputMaybe<Array<CreateProvinceInput>>;
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
  option_ids: Array<Scalars['ID']>;
  type: DisaggregateType;
};

export type CreateDistrictInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  province_id: Scalars['String'];
};

export type CreateDistrictUserInput = {
  catchment_district_id: Scalars['ID'];
  organisation_user_id: Scalars['ID'];
  roles: Array<DistrictUserRoleType>;
};

export type CreateIndicatorDisaggregateInput = {
  disaggregate_option_id: Scalars['ID'];
  organisation_indicator_id: Scalars['ID'];
};

export type CreateIndicatorDisaggregateReportInput = {
  achieved: Scalars['Float'];
  comment?: InputMaybe<Scalars['String']>;
  indicator_disaggregate_id: Scalars['String'];
  report_id: Scalars['String'];
  target?: InputMaybe<Scalars['Float']>;
};

export type CreateIndicatorDisaggregatesInput = {
  disaggregate_option_ids: Array<Scalars['ID']>;
  organisation_indicator_id: Scalars['ID'];
};

export type CreateIndicatorInput = {
  category: Scalars['String'];
  description: Scalars['String'];
  indicator_number: Scalars['String'];
  indicator_unit_id: Scalars['String'];
  report_template_id: Scalars['String'];
  type: IndicatorType;
};

export type CreateIndicatorUnitInput = {
  display_name: Scalars['String'];
  unit: Scalars['String'];
};

export type CreateInvitedUserInput = {
  catchment_districts: Array<CatchmentDistrictInput>;
  organisation_id: Scalars['ID'];
  user_details: CreateUserInput;
  user_invitation_id: Scalars['ID'];
};

export type CreateOptionInput = {
  option_name: Scalars['String'];
};

export type CreateOrganisationIndicatorInput = {
  indicator_id: Scalars['String'];
  organisation_id: Scalars['ID'];
};

export type CreateOrganisationIndicatorsInput = {
  disaggregate_option_ids: Array<Scalars['ID']>;
  indicator_id: Scalars['String'];
  organisation_id: Scalars['ID'];
};

export type CreateOrganisationIndicatorsResult = ApiCreateError | CreateOrganisationIndicatorsSuccess;

export type CreateOrganisationIndicatorsSuccess = {
  __typename?: 'CreateOrganisationIndicatorsSuccess';
  organisation_indicators: Array<OrganisationIndicator>;
};

export type CreateOrganisationInput = {
  country_id: Scalars['String'];
  logo?: InputMaybe<Scalars['Byte']>;
  name: Scalars['String'];
};

export type CreateOrganisationReportTemplateInput = {
  organisation_id: Scalars['ID'];
  report_template_id: Scalars['String'];
};

export type CreateOrganisationReportTemplatesInput = {
  organisation_id: Scalars['ID'];
  report_template_ids: Array<Scalars['ID']>;
};

export type CreateOrganisationUserInput = {
  is_default_organisation: Scalars['Boolean'];
  organisation_id: Scalars['ID'];
  role: OrganisationUserRoleType;
  user_id: Scalars['ID'];
};

export type CreateProvinceInput = {
  code: Scalars['String'];
  country_id: Scalars['String'];
  name: Scalars['String'];
};

export type CreateReportInput = {
  catchment_district_id: Scalars['String'];
  organisation_report_template_id: Scalars['String'];
  report_due_date: Scalars['DateTime'];
  reporting_date: Scalars['DateTime'];
  reporting_period: Scalars['String'];
  reporting_period_end_date: Scalars['DateTime'];
  reporting_period_start_date: Scalars['DateTime'];
};

export type CreateReportTemplateInput = {
  frequency: ReportingFrequency;
  icon?: InputMaybe<Scalars['Byte']>;
  name: Scalars['String'];
  type: IndicatorType;
  window: Scalars['Int'];
};

export type CreateResidenceInput = {
  cost_classification: ResidenceClassification;
  district_id: Scalars['String'];
  name: Scalars['String'];
};

export type CreateServiceAreaInput = {
  catchment_district_id: Scalars['String'];
  residence_id: Scalars['String'];
};

export type CreateServiceAreaSewerConnectionInput = {
  connections: Scalars['BigInt'];
  service_area_id: Scalars['ID'];
  sewer_netowrk_id: Scalars['ID'];
};

export type CreateServiceAreaWaterConnectionInput = {
  connections: Scalars['BigInt'];
  service_area_id: Scalars['ID'];
  water_netowrk_id: Scalars['ID'];
};

export type CreateSewerNetworkInput = {
  name: Scalars['String'];
  plant_id: Scalars['String'];
  type: NetworkOwnershipType;
};

export type CreateSewerTreatmentPlantInput = {
  capacity: Scalars['Float'];
  catchment_district_id: Scalars['String'];
  gps?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  ponds: Scalars['Int'];
};

export type CreateSewerTreatmentPlantPayload = {
  __typename?: 'CreateSewerTreatmentPlantPayload';
  sewer_treatment_plant: SewerTreatmentPlant;
};

export type CreateUserInput = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
};

export type CreateUserInvitationCatchmentDistrictInput = {
  catchment_district_id: Scalars['ID'];
  roles: Array<DistrictUserRoleType>;
};

export type CreateUserInvitationInput = {
  catchment_districts: Array<CreateUserInvitationCatchmentDistrictInput>;
  email: Scalars['EmailAddress'];
  invited_by: Scalars['EmailAddress'];
  organisation_id: Scalars['ID'];
  organisation_role: OrganisationUserRoleType;
};

export type CreateWaterNetworkInput = {
  name: Scalars['String'];
  plant_id: Scalars['String'];
  type: NetworkOwnershipType;
};

export type CreateWaterProductionSiteInput = {
  gps?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  plant_id: Scalars['String'];
  static_discharge_head: Scalars['Float'];
  static_suction_head: Scalars['Float'];
  type: WaterProductionSiteType;
};

export type CreateWaterProductionSitePayload = {
  __typename?: 'CreateWaterProductionSitePayload';
  water_production_site: WaterProductionSite;
};

export type CreateWaterStorageTankInput = {
  gps?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  plant_id: Scalars['String'];
  storage_capacity: Scalars['Float'];
  type: WaterStorageTankType;
};

export type CreateWaterStorageTankPayload = {
  __typename?: 'CreateWaterStorageTankPayload';
  water_storage_tank: WaterStorageTank;
};

export type CreateWaterTreatmentPlantInput = {
  catchment_district_id: Scalars['String'];
  gps?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  production_capacity: Scalars['Float'];
  water_source: WaterSourceType;
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
  catchment_district_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
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
  catchment_district_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type DisableUserInput = {
  id: Scalars['ID'];
  update: UserDisableInput;
};

export type Disaggregate = {
  __typename?: 'Disaggregate';
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  disaggregate_options?: Maybe<Array<DisaggregateOption>>;
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  name: Scalars['String'];
  type: DisaggregateType;
};

export type DisaggregateOption = {
  __typename?: 'DisaggregateOption';
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  disaggregate?: Maybe<DisaggregateResult>;
  disaggregate_id: Scalars['ID'];
  id: Scalars['ID'];
  indicator_disaggregates?: Maybe<Array<IndicatorDisaggregate>>;
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  option?: Maybe<OptionResult>;
  option_id: Scalars['String'];
};

export type DisaggregateOptionResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | DisaggregateOption;

export type DisaggregateResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | Disaggregate;

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
  code: Scalars['String'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  name: Scalars['String'];
  organisations_in_district?: Maybe<Array<CatchmentDistrict>>;
  province?: Maybe<ProvinceResult>;
  province_id: Scalars['String'];
  residences?: Maybe<Array<Residence>>;
};

export type DistrictResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | District;

export type DistrictUpdateInput = {
  code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type DistrictUser = {
  __typename?: 'DistrictUser';
  catchment_district?: Maybe<CatchmentDistrictResult>;
  catchment_district_id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  id: Scalars['ID'];
  is_default_user_district: Scalars['Boolean'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  organisation_user?: Maybe<OrganisationUserResult>;
  organisation_user_id: Scalars['ID'];
  roles: Array<DistrictUserRoleType>;
};

export type DistrictUserResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | DistrictUser;

export enum DistrictUserRoleType {
  Approver = 'APPROVER',
  DataEntry = 'DATA_ENTRY',
  DistrictManager = 'DISTRICT_MANAGER',
  User = 'USER'
}

export type ErrorField = {
  __typename?: 'ErrorField';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Indicator = {
  __typename?: 'Indicator';
  category: Scalars['String'];
  contributing_organisation: Scalars['String'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  indicator_number: Scalars['String'];
  indicator_organisations?: Maybe<Array<OrganisationIndicator>>;
  indicator_unit?: Maybe<IndicatorUnitResult>;
  indicator_unit_id: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  report_template?: Maybe<ReportTemplateResult>;
  report_template_id: Scalars['String'];
  type: IndicatorType;
};

export type IndicatorDisaggregate = {
  __typename?: 'IndicatorDisaggregate';
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  disaggregate_option?: Maybe<DisaggregateOptionResult>;
  disaggregate_option_id: Scalars['ID'];
  id: Scalars['ID'];
  indicator_disaggregate_reports?: Maybe<Array<IndicatorDisaggregateReport>>;
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  organisation_indicator?: Maybe<OrganisationIndicatorResult>;
  organisation_indicator_id: Scalars['String'];
};

export type IndicatorDisaggregateReport = {
  __typename?: 'IndicatorDisaggregateReport';
  achieved: Scalars['Float'];
  comment?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  id: Scalars['ID'];
  indicator_disaggregate?: Maybe<IndicatorDisaggregateResult>;
  indicator_disaggregate_id: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  report?: Maybe<ReportResult>;
  report_id: Scalars['String'];
  target?: Maybe<Scalars['Float']>;
};

export type IndicatorDisaggregateReportResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | IndicatorDisaggregateReport;

export type IndicatorDisaggregateReportUpdateInput = {
  achieved: Scalars['Float'];
  comment?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<Scalars['Float']>;
};

export type IndicatorDisaggregateResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | IndicatorDisaggregate;

export type IndicatorResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | Indicator;

export enum IndicatorType {
  Custom = 'CUSTOM',
  Nis = 'NIS'
}

export type IndicatorUnit = {
  __typename?: 'IndicatorUnit';
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  display_name: Scalars['String'];
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  unit: Scalars['String'];
};

export type IndicatorUnitResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | IndicatorUnit;

export type IndicatorUnitUpdateInput = {
  display_name?: InputMaybe<Scalars['String']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type IndicatorUpdateInput = {
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  indicator_number?: InputMaybe<Scalars['String']>;
  indicator_unit_id?: InputMaybe<Scalars['String']>;
  report_template_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<IndicatorType>;
};

export type LoginInput = {
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
};

export type LoginResult = ApiLoginError | LoginSuccess;

export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  accessToken: Scalars['JWT'];
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCatchmentDistrict: CatchmentDistrictResult;
  createCatchmentProvince: CatchmentProvinceResult;
  createCountry: CountryResult;
  createDisaggregate: DisaggregateResult;
  createDisaggregateOption: DisaggregateOptionResult;
  createDisaggregateOptions: ApiBatchPayloadResult;
  createDisaggregateWithOptions: DisaggregateResult;
  createDistrict: DistrictResult;
  createDistrictUser: DistrictUserResult;
  createIndicator: IndicatorResult;
  createIndicatorDisaggregate: IndicatorDisaggregateResult;
  createIndicatorDisaggregateReport: IndicatorDisaggregateReportResult;
  createIndicatorDisaggregates: ApiBatchPayloadResult;
  createIndicatorUnit: IndicatorUnitResult;
  createInvitedUser: UserResult;
  createOption: OptionResult;
  createOrganisation: OrganisationResult;
  createOrganisationIndicator: OrganisationIndicatorResult;
  createOrganisationIndicators: CreateOrganisationIndicatorsResult;
  createOrganisationReportTemplate: OrganisationReportTemplateResult;
  createOrganisationReportTemplates: ApiBatchPayloadResult;
  createOrganisationUser: OrganisationUserResult;
  createProvince: ProvinceResult;
  createReport: ReportResult;
  createReportTemplate: ReportTemplateResult;
  createResidence: ResidenceResult;
  createServiceArea: ServiceAreaResult;
  createServiceAreaSewerConnection: ServiceAreaSewerConnectionResult;
  createServiceAreaWaterConnection: ServiceAreaWaterConnectionResult;
  createSewerNetwork: SewerNetworkResult;
  createSewerTreatmentPlant: SewerTreatmentPlantResult;
  createUser: UserResult;
  createUserInvitation: UserInvitationResult;
  createWaterNetwork: WaterNetworkResult;
  createWaterProductionSite?: Maybe<CreateWaterProductionSitePayload>;
  createWaterStorageTank?: Maybe<CreateWaterStorageTankPayload>;
  createWaterTreatmentPlant: WaterTreatmentPlantResult;
  deleteCatchmentDistrict: CatchmentDistrictResult;
  deleteCatchmentProvince: CatchmentProvinceResult;
  deleteCountry: CountryResult;
  deleteDisaggregate: DisaggregateResult;
  deleteDisaggregateOption: DisaggregateOptionResult;
  deleteDistrict: DistrictResult;
  deleteDistrictUser: DistrictUserResult;
  deleteIndicator: IndicatorResult;
  deleteIndicatorDisaggregate: IndicatorDisaggregateResult;
  deleteIndicatorDisaggregateReport: IndicatorDisaggregateReportResult;
  deleteIndicatorUnit: IndicatorUnitResult;
  deleteOption: OptionResult;
  deleteOrganisation: OrganisationResult;
  deleteOrganisationIndicator: OrganisationIndicatorResult;
  deleteOrganisationReportTemplate: OrganisationReportTemplateResult;
  deleteOrganisationUser: OrganisationUserResult;
  deleteProvince: ProvinceResult;
  deleteReport: ReportResult;
  deleteReportTemplate: ReportTemplateResult;
  deleteResidence: ResidenceResult;
  deleteServiceArea: ServiceAreaResult;
  deleteServiceAreaSewerConnection: ServiceAreaSewerConnectionResult;
  deleteServiceAreaWaterConnection: ServiceAreaWaterConnectionResult;
  deleteSewerNetwork: SewerNetworkResult;
  deleteSewerTreatmentPlants: ApiBatchPayloadResult;
  deleteUser: UserResult;
  deleteUserInvitation: UserInvitationResult;
  deleteWaterNetwork: WaterNetworkResult;
  deleteWaterProductionSite?: Maybe<DeleteWaterProductionSitePayload>;
  deleteWaterStorageTank?: Maybe<DeleteWaterStorageTankPayload>;
  deleteWaterTreatmentPlants: ApiBatchPayloadResult;
  disableUser: UserResult;
  login: LoginResult;
  requestPasswordReset: PasswordResetRequestResult;
  resetPassword: PasswordResetResult;
  setUserDefaultDistrict: DistrictUserResult;
  setUserDefaultProject: OrganisationUserResult;
  updateCatchmentDistrict: CatchmentDistrictResult;
  updateCatchmentProvince: CatchmentProvinceResult;
  updateCountry: CountryResult;
  updateDisaggregate: DisaggregateResult;
  updateDistrict: DistrictResult;
  updateIndicator: IndicatorResult;
  updateIndicatorDisaggregateReport: IndicatorDisaggregateReportResult;
  updateIndicatorUnit: IndicatorUnitResult;
  updateOption: OptionResult;
  updateOrganisation: OrganisationResult;
  updateOrganisationUser: OrganisationUserResult;
  updateProvince: ProvinceResult;
  updateReport: ReportResult;
  updateReportTemplate: ReportTemplateResult;
  updateResidence: ResidenceResult;
  updateServiceAreaSewerConnection: ServiceAreaSewerConnectionResult;
  updateServiceAreaWaterConnection: ServiceAreaWaterConnectionResult;
  updateSewerNetwork: SewerNetworkResult;
  updateSewerTreatmentPlant: SewerTreatmentPlantResult;
  updateUser: UserResult;
  updateUserRolesForDistrict: DistrictUserResult;
  updateWaterNetwork: WaterNetworkResult;
  updateWaterProductionSite?: Maybe<UpdateWaterProductionSitePayload>;
  updateWaterStorageTank?: Maybe<UpdateWaterStorageTankPayload>;
  updateWaterTreatmentPlant: WaterTreatmentPlantResult;
};


export type MutationCreateCatchmentDistrictArgs = {
  input: CreateCatchmentDistrictInput;
};


export type MutationCreateCatchmentProvinceArgs = {
  input: CreateCatchmentProvinceInput;
};


export type MutationCreateCountryArgs = {
  input: CreateCountryInput;
};


export type MutationCreateDisaggregateArgs = {
  input: CreateDisaggregateInput;
};


export type MutationCreateDisaggregateOptionArgs = {
  input: CreateDisaggregateOptionInput;
};


export type MutationCreateDisaggregateOptionsArgs = {
  input: CreateDisaggregateOptionsInput;
};


export type MutationCreateDisaggregateWithOptionsArgs = {
  input: CreateDisaggregateWithOptionsInput;
};


export type MutationCreateDistrictArgs = {
  input: CreateDistrictInput;
};


export type MutationCreateDistrictUserArgs = {
  input: CreateDistrictUserInput;
};


export type MutationCreateIndicatorArgs = {
  input: CreateIndicatorInput;
};


export type MutationCreateIndicatorDisaggregateArgs = {
  input: CreateIndicatorDisaggregateInput;
};


export type MutationCreateIndicatorDisaggregateReportArgs = {
  input: CreateIndicatorDisaggregateReportInput;
};


export type MutationCreateIndicatorDisaggregatesArgs = {
  input: CreateIndicatorDisaggregatesInput;
};


export type MutationCreateIndicatorUnitArgs = {
  input: CreateIndicatorUnitInput;
};


export type MutationCreateInvitedUserArgs = {
  input: CreateInvitedUserInput;
};


export type MutationCreateOptionArgs = {
  input: CreateOptionInput;
};


export type MutationCreateOrganisationArgs = {
  input: CreateOrganisationInput;
};


export type MutationCreateOrganisationIndicatorArgs = {
  input: CreateOrganisationIndicatorInput;
};


export type MutationCreateOrganisationIndicatorsArgs = {
  input: Array<CreateOrganisationIndicatorsInput>;
};


export type MutationCreateOrganisationReportTemplateArgs = {
  input: CreateOrganisationReportTemplateInput;
};


export type MutationCreateOrganisationReportTemplatesArgs = {
  input: CreateOrganisationReportTemplatesInput;
};


export type MutationCreateOrganisationUserArgs = {
  input: CreateOrganisationUserInput;
};


export type MutationCreateProvinceArgs = {
  input: CreateProvinceInput;
};


export type MutationCreateReportArgs = {
  input: CreateReportInput;
};


export type MutationCreateReportTemplateArgs = {
  input: CreateReportTemplateInput;
};


export type MutationCreateResidenceArgs = {
  input: CreateResidenceInput;
};


export type MutationCreateServiceAreaArgs = {
  input: CreateServiceAreaInput;
};


export type MutationCreateServiceAreaSewerConnectionArgs = {
  input: CreateServiceAreaSewerConnectionInput;
};


export type MutationCreateServiceAreaWaterConnectionArgs = {
  input: CreateServiceAreaWaterConnectionInput;
};


export type MutationCreateSewerNetworkArgs = {
  input: CreateSewerNetworkInput;
};


export type MutationCreateSewerTreatmentPlantArgs = {
  input: CreateSewerTreatmentPlantInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUserInvitationArgs = {
  input: CreateUserInvitationInput;
};


export type MutationCreateWaterNetworkArgs = {
  input: CreateWaterNetworkInput;
};


export type MutationCreateWaterProductionSiteArgs = {
  input: CreateWaterProductionSiteInput;
};


export type MutationCreateWaterStorageTankArgs = {
  input: CreateWaterStorageTankInput;
};


export type MutationCreateWaterTreatmentPlantArgs = {
  input: CreateWaterTreatmentPlantInput;
};


export type MutationDeleteCatchmentDistrictArgs = {
  input: DeleteCatchmentDistrictInput;
};


export type MutationDeleteCatchmentProvinceArgs = {
  input: DeleteCatchmentProvinceInput;
};


export type MutationDeleteCountryArgs = {
  input: DeleteCountryInput;
};


export type MutationDeleteDisaggregateArgs = {
  input: DeleteDisaggregateInput;
};


export type MutationDeleteDisaggregateOptionArgs = {
  input: DeleteDisaggregateOptionInput;
};


export type MutationDeleteDistrictArgs = {
  input: DeleteDistrictInput;
};


export type MutationDeleteDistrictUserArgs = {
  input: DeleteDistrictUserInput;
};


export type MutationDeleteIndicatorArgs = {
  input: DeleteIndicatorInput;
};


export type MutationDeleteIndicatorDisaggregateArgs = {
  input: DeleteIndicatorDisaggregateInput;
};


export type MutationDeleteIndicatorDisaggregateReportArgs = {
  input: DeleteIndicatorDisaggregateReportInput;
};


export type MutationDeleteIndicatorUnitArgs = {
  input: DeleteIndicatorUnitInput;
};


export type MutationDeleteOptionArgs = {
  input: DeleteOptionInput;
};


export type MutationDeleteOrganisationArgs = {
  input: DeleteOrganisationInput;
};


export type MutationDeleteOrganisationIndicatorArgs = {
  input: DeleteOrganisationIndicatorInput;
};


export type MutationDeleteOrganisationReportTemplateArgs = {
  input: DeleteOrganisationReportTemplateInput;
};


export type MutationDeleteOrganisationUserArgs = {
  input: DeleteOrganisationUserInput;
};


export type MutationDeleteProvinceArgs = {
  input: DeleteProvinceInput;
};


export type MutationDeleteReportArgs = {
  input: DeleteReportInput;
};


export type MutationDeleteReportTemplateArgs = {
  input: DeleteReportTemplateInput;
};


export type MutationDeleteResidenceArgs = {
  input: DeleteResidenceInput;
};


export type MutationDeleteServiceAreaArgs = {
  input: DeleteServiceAreaInput;
};


export type MutationDeleteServiceAreaSewerConnectionArgs = {
  input: DeleteServiceAreaSewerConnectionInput;
};


export type MutationDeleteServiceAreaWaterConnectionArgs = {
  input: DeleteServiceAreaWaterConnectionInput;
};


export type MutationDeleteSewerNetworkArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSewerTreatmentPlantsArgs = {
  filter: DeleteSewerTreatmentPlantsInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteUserInvitationArgs = {
  input: DeleteUserInvitationInput;
};


export type MutationDeleteWaterNetworkArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWaterProductionSiteArgs = {
  input: DeleteWaterProductionSiteInput;
};


export type MutationDeleteWaterStorageTankArgs = {
  input: DeleteWaterStorageTankInput;
};


export type MutationDeleteWaterTreatmentPlantsArgs = {
  filter: DeleteWaterTreatmentPlantsInput;
};


export type MutationDisableUserArgs = {
  input: DisableUserInput;
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


export type MutationSetUserDefaultDistrictArgs = {
  input: SetUserDefaultDistrictInput;
};


export type MutationSetUserDefaultProjectArgs = {
  organisation_user_id: Scalars['ID'];
};


export type MutationUpdateCatchmentDistrictArgs = {
  input: UpdateCatchmentDistrictInput;
};


export type MutationUpdateCatchmentProvinceArgs = {
  input: UpdateCatchmentProvinceInput;
};


export type MutationUpdateCountryArgs = {
  input: UpdateCountryInput;
};


export type MutationUpdateDisaggregateArgs = {
  input: UpdateDisaggregateInput;
};


export type MutationUpdateDistrictArgs = {
  input: UpdateDistrictInput;
};


export type MutationUpdateIndicatorArgs = {
  input: UpdateIndicatorInput;
};


export type MutationUpdateIndicatorDisaggregateReportArgs = {
  input: UpdateIndicatorDisaggregateReportInput;
};


export type MutationUpdateIndicatorUnitArgs = {
  input: UpdateIndicatorUnitInput;
};


export type MutationUpdateOptionArgs = {
  input: UpdateOptionInput;
};


export type MutationUpdateOrganisationArgs = {
  input: UpdateOrganisationInput;
};


export type MutationUpdateOrganisationUserArgs = {
  input: UpdateOrganisationUserInput;
};


export type MutationUpdateProvinceArgs = {
  input: UpdateProvinceInput;
};


export type MutationUpdateReportArgs = {
  input: UpdateReportInput;
};


export type MutationUpdateReportTemplateArgs = {
  input: UpdateReportTemplateInput;
};


export type MutationUpdateResidenceArgs = {
  input: UpdateResidenceInput;
};


export type MutationUpdateServiceAreaSewerConnectionArgs = {
  input: UpdateServiceAreaSewerConnectionInput;
};


export type MutationUpdateServiceAreaWaterConnectionArgs = {
  input: UpdateServiceAreaWaterConnectionInput;
};


export type MutationUpdateSewerNetworkArgs = {
  input: UpdateSewerNetworkInput;
};


export type MutationUpdateSewerTreatmentPlantArgs = {
  input: UpdateSewerTreatmentPlantInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateUserRolesForDistrictArgs = {
  input: UpdateUserRolesForDistrictInput;
};


export type MutationUpdateWaterNetworkArgs = {
  input: UpdateWaterNetworkInput;
};


export type MutationUpdateWaterProductionSiteArgs = {
  input: UpdateWaterProductionSiteInput;
};


export type MutationUpdateWaterStorageTankArgs = {
  input: UpdateWaterStorageTankInput;
};


export type MutationUpdateWaterTreatmentPlantArgs = {
  input: UpdateWaterTreatmentPlantInput;
};

export enum NetworkOwnershipType {
  Independent = 'INDEPENDENT',
  Internal = 'INTERNAL'
}

export type Option = {
  __typename?: 'Option';
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  disaggregate_options?: Maybe<Array<DisaggregateOption>>;
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  option_name: Scalars['String'];
};

export type OptionResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | Option;

export type OptionUpdateInput = {
  option_name: Scalars['String'];
};

export type Organisation = {
  __typename?: 'Organisation';
  allow_master_support: Scalars['Boolean'];
  catchment_provinces?: Maybe<Array<CatchmentProvince>>;
  country?: Maybe<CountryResult>;
  country_id: Scalars['String'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  logo?: Maybe<Scalars['Byte']>;
  name: Scalars['String'];
  organisation_indicators?: Maybe<Array<OrganisationIndicator>>;
  organisation_report_templates?: Maybe<Array<OrganisationReportTemplate>>;
  reports?: Maybe<Array<Report>>;
  users?: Maybe<Array<OrganisationUser>>;
};

export type OrganisationIndicator = {
  __typename?: 'OrganisationIndicator';
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  id: Scalars['ID'];
  indicator?: Maybe<IndicatorResult>;
  indicator_disaggregates?: Maybe<Array<IndicatorDisaggregate>>;
  indicator_id: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  organisation?: Maybe<OrganisationResult>;
  organisation_id: Scalars['ID'];
};

export type OrganisationIndicatorResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | OrganisationIndicator;

export type OrganisationReportTemplate = {
  __typename?: 'OrganisationReportTemplate';
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  organisation?: Maybe<OrganisationResult>;
  organisation_id: Scalars['ID'];
  report_template?: Maybe<ReportTemplateResult>;
  report_template_id: Scalars['String'];
  reports?: Maybe<Array<Report>>;
};

export type OrganisationReportTemplateResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | OrganisationReportTemplate;

export type OrganisationResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | Organisation;

export type OrganisationUpdateInput = {
  logo?: InputMaybe<Scalars['Byte']>;
  name?: InputMaybe<Scalars['String']>;
};

export type OrganisationUser = {
  __typename?: 'OrganisationUser';
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  default_district?: Maybe<DistrictResult>;
  district_roles?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  is_default_organisation: Scalars['Boolean'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  organisation?: Maybe<OrganisationResult>;
  organisation_id: Scalars['String'];
  role: OrganisationUserRoleType;
  user?: Maybe<UserResult>;
  user_id: Scalars['String'];
};

export type OrganisationUserResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | OrganisationUser;

export enum OrganisationUserRoleType {
  Admin = 'ADMIN',
  Owner = 'OWNER',
  Support = 'SUPPORT',
  User = 'USER'
}

export type OrganisationUserUpdateInput = {
  role: OrganisationUserRoleType;
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

export type PasswordResetRequestResult = ApiPasswordResetError | PasswordResetRequestPayload;

export type PasswordResetResult = ApiPasswordResetError | User;

export type Province = {
  __typename?: 'Province';
  code: Scalars['String'];
  country?: Maybe<CountryResult>;
  country_id: Scalars['String'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  districts?: Maybe<Array<District>>;
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  name: Scalars['String'];
};

export type ProvinceResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | Province;

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
  default_user_district: DistrictResult;
  default_user_organisation: OrganisationResult;
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
  organisation_user_id: Scalars['ID'];
  user_id: Scalars['ID'];
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
  service_area_id: Scalars['ID'];
  sewer_netowrk_id: Scalars['ID'];
};


export type QueryService_Area_Sewer_ConnectionsArgs = {
  service_area_id: Scalars['ID'];
};


export type QueryService_Area_Water_ConnectionArgs = {
  service_area_id: Scalars['ID'];
  water_netowrk_id: Scalars['ID'];
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
  catchment_district?: Maybe<CatchmentDistrictResult>;
  catchment_district_id: Scalars['String'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  id: Scalars['ID'];
  indicator_disaggregate_reports?: Maybe<Array<IndicatorDisaggregateReport>>;
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  organisation_report_template?: Maybe<OrganisationReportTemplateResult>;
  organisation_report_template_id: Scalars['String'];
  report_due_date: Scalars['DateTime'];
  reporting_date: Scalars['DateTime'];
  reporting_period: Scalars['String'];
  reporting_period_end_date: Scalars['DateTime'];
  reporting_period_start_date: Scalars['DateTime'];
};

export type ReportResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | Report;

export type ReportTemplate = {
  __typename?: 'ReportTemplate';
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  frequency: ReportingFrequency;
  icon?: Maybe<Scalars['Byte']>;
  id: Scalars['ID'];
  indicators?: Maybe<Array<Indicator>>;
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  name: Scalars['String'];
  organisation_report_templates?: Maybe<Array<OrganisationReportTemplate>>;
  type: IndicatorType;
  window: Scalars['Int'];
};

export type ReportTemplateResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | ReportTemplate;

export type ReportTemplateUpdateInput = {
  frequency?: InputMaybe<ReportingFrequency>;
  icon?: InputMaybe<Scalars['Byte']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<IndicatorType>;
  window?: InputMaybe<Scalars['Int']>;
};

export type ReportUpdateInput = {
  report_due_date: Scalars['DateTime'];
  reporting_period_end_date: Scalars['DateTime'];
  reporting_period_start_date: Scalars['DateTime'];
};

export enum ReportingFrequency {
  Annually = 'ANNUALLY',
  BiAnnualy = 'BI_ANNUALY',
  Monthly = 'MONTHLY',
  Quarterly = 'QUARTERLY',
  Weekly = 'WEEKLY'
}

export type Residence = {
  __typename?: 'Residence';
  cost_classification: ResidenceClassification;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  district?: Maybe<DistrictResult>;
  district_id: Scalars['String'];
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  name: Scalars['String'];
  service_areas?: Maybe<Array<ServiceArea>>;
};

export enum ResidenceClassification {
  HighCost = 'HIGH_COST',
  LowCost = 'LOW_COST',
  MediumCost = 'MEDIUM_COST',
  PeriUrban = 'PERI_URBAN',
  Rural = 'RURAL'
}

export type ResidenceResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | Residence;

export type ResidenceUpdateInput = {
  cost_classification?: InputMaybe<ResidenceClassification>;
  district_id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SearchUserInvitationsInput = {
  catchment_district_ids?: InputMaybe<Array<Scalars['ID']>>;
  email?: InputMaybe<Scalars['EmailAddress']>;
  organisation_id?: InputMaybe<Scalars['ID']>;
};

export type ServiceArea = {
  __typename?: 'ServiceArea';
  catchment_district: CatchmentDistrictResult;
  catchment_district_id: Scalars['String'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  residence?: Maybe<ResidenceResult>;
  residence_id: Scalars['String'];
  service_area_sewer_connections?: Maybe<Array<ServiceAreaSewerConnection>>;
  service_area_water_connections?: Maybe<Array<ServiceAreaWaterConnection>>;
};

export type ServiceAreaResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | ServiceArea;

export type ServiceAreaSewerConnection = {
  __typename?: 'ServiceAreaSewerConnection';
  connections: Scalars['BigInt'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  service_area?: Maybe<ServiceAreaResult>;
  service_area_id: Scalars['ID'];
  sewer_netowrk_id: Scalars['ID'];
  sewer_network?: Maybe<SewerNetworkResult>;
};

export type ServiceAreaSewerConnectionResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | ServiceAreaSewerConnection;

export type ServiceAreaSewerConnectionUpdateInput = {
  connections: Scalars['BigInt'];
};

export type ServiceAreaWaterConnection = {
  __typename?: 'ServiceAreaWaterConnection';
  connections: Scalars['BigInt'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  service_area?: Maybe<ServiceAreaResult>;
  service_area_id: Scalars['ID'];
  water_netowrk_id: Scalars['ID'];
  water_network?: Maybe<WaterNetworkResult>;
};

export type ServiceAreaWaterConnectionResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | ServiceAreaWaterConnection;

export type ServiceAreaWaterConnectionUpdateInput = {
  connections: Scalars['BigInt'];
};

export type SetUserDefaultDistrictInput = {
  district_user_id: Scalars['ID'];
  organisation_user_id: Scalars['ID'];
};

export type SewerNetwork = {
  __typename?: 'SewerNetwork';
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  name: Scalars['String'];
  plant_id: Scalars['String'];
  sewer_network_sewer_connections?: Maybe<Array<ServiceAreaSewerConnection>>;
  sewer_treatment_plant?: Maybe<SewerTreatmentPlantResult>;
  type: NetworkOwnershipType;
};

export type SewerNetworkResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | SewerNetwork;

export type SewerNetworkUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<NetworkOwnershipType>;
};

export type SewerTreatmentPlant = {
  __typename?: 'SewerTreatmentPlant';
  capacity: Scalars['Float'];
  catchment_district?: Maybe<CatchmentDistrictResult>;
  catchment_district_id: Scalars['String'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  gps?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  name: Scalars['String'];
  ponds: Scalars['Int'];
  sewer_network?: Maybe<SewerNetworkResult>;
};

export type SewerTreatmentPlantResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | SewerTreatmentPlant;

export type SewerTreatmentPlantUpdateInput = {
  capacity: Scalars['Float'];
  gps?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  ponds: Scalars['Int'];
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
  update: ServiceAreaWaterConnectionUpdateInput;
  water_netowrk_id: Scalars['ID'];
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
  confirmed_at?: Maybe<Scalars['DateTime']>;
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  disabled: Scalars['Boolean'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  hashed_confirmation_token?: Maybe<Scalars['String']>;
  hashed_password_reset_token?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  last_login?: Maybe<Scalars['DateTime']>;
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  last_name: Scalars['String'];
  master_support: Scalars['Boolean'];
  theme?: Maybe<UserTheme>;
  user_districts?: Maybe<Array<District>>;
  user_organisations?: Maybe<Array<OrganisationUser>>;
};

export type UserDisableInput = {
  disabled: Scalars['Boolean'];
};

export type UserInvitation = {
  __typename?: 'UserInvitation';
  catchment_district_ids?: Maybe<Array<Scalars['String']>>;
  email: Scalars['EmailAddress'];
  id: Scalars['ID'];
  invitation_token: Scalars['String'];
  organisation_id: Scalars['String'];
  ttl: Scalars['DateTime'];
};

export type UserInvitationResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | UserInvitation;

export type UserResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | User;

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
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  name: Scalars['String'];
  plant_id: Scalars['String'];
  type: NetworkOwnershipType;
  water_network_water_connections?: Maybe<Array<ServiceAreaWaterConnection>>;
  water_treatment_plant?: Maybe<WaterTreatmentPlantResult>;
};

export type WaterNetworkResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | WaterNetwork;

export type WaterNetworkUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<NetworkOwnershipType>;
};

export type WaterProductionSite = {
  __typename?: 'WaterProductionSite';
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  gps?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  name: Scalars['String'];
  plant_id: Scalars['String'];
  static_discharge_head: Scalars['Float'];
  static_suction_head: Scalars['Float'];
  type: WaterProductionSiteType;
  water_treatment_plant?: Maybe<WaterTreatmentPlantResult>;
};

export enum WaterProductionSiteType {
  Borehole = 'BOREHOLE',
  Dam = 'DAM'
}

export type WaterProductionSiteUpdateInput = {
  gps?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  static_discharge_head: Scalars['Float'];
  static_suction_head: Scalars['Float'];
  type: WaterProductionSiteType;
};

export enum WaterSourceType {
  Ground = 'GROUND',
  Surface = 'SURFACE'
}

export type WaterStorageTank = {
  __typename?: 'WaterStorageTank';
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  gps?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  name: Scalars['String'];
  plant_id: Scalars['String'];
  storage_capacity: Scalars['Float'];
  type: WaterStorageTankType;
  water_treatment_plant?: Maybe<WaterTreatmentPlantResult>;
};

export enum WaterStorageTankType {
  Distribution = 'DISTRIBUTION',
  Production = 'PRODUCTION'
}

export type WaterStorageTankUpdateInput = {
  gps?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  plant_id: Scalars['String'];
  storage_capacity: Scalars['Float'];
  type: WaterStorageTankType;
};

export type WaterTreatmentPlant = {
  __typename?: 'WaterTreatmentPlant';
  catchment_district?: Maybe<CatchmentDistrictResult>;
  catchment_district_id: Scalars['String'];
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  gps?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  name: Scalars['String'];
  production_capacity: Scalars['Float'];
  water_network: WaterNetworkResult;
  water_production_sites?: Maybe<Array<WaterProductionSite>>;
  water_source: WaterSourceType;
  water_storage_tanks?: Maybe<Array<WaterStorageTank>>;
};

export type WaterTreatmentPlantResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | WaterTreatmentPlant;

export type WaterTreatmentPlantUpdateInput = {
  gps?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  production_capacity: Scalars['Float'];
  water_source: WaterSourceType;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AccountNumber: ResolverTypeWrapper<Scalars['AccountNumber']>;
  ApiBatchPayload: ResolverTypeWrapper<ApiBatchPayload>;
  ApiBatchPayloadResult: ResolversTypes['ApiBatchPayload'] | ResolversTypes['ApiOperationError'];
  ApiCreateError: ResolverTypeWrapper<ApiCreateError>;
  ApiDeleteError: ResolverTypeWrapper<ApiDeleteError>;
  ApiError: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiLoginError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiOperationError'] | ResolversTypes['ApiPasswordResetError'] | ResolversTypes['ApiUpdateError'];
  ApiLoginError: ResolverTypeWrapper<ApiLoginError>;
  ApiNotFoundError: ResolverTypeWrapper<ApiNotFoundError>;
  ApiOperationError: ResolverTypeWrapper<ApiOperationError>;
  ApiPasswordResetError: ResolverTypeWrapper<ApiPasswordResetError>;
  ApiUpdateError: ResolverTypeWrapper<ApiUpdateError>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Byte: ResolverTypeWrapper<Scalars['Byte']>;
  CatchmentDistrict: ResolverTypeWrapper<Omit<CatchmentDistrict, 'catchment_province' | 'district'> & { catchment_province?: Maybe<ResolversTypes['CatchmentProvinceResult']>, district?: Maybe<ResolversTypes['DistrictResult']> }>;
  CatchmentDistrictInput: CatchmentDistrictInput;
  CatchmentDistrictResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['CatchmentDistrict'];
  CatchmentDistrictUpdateInput: CatchmentDistrictUpdateInput;
  CatchmentProvince: ResolverTypeWrapper<Omit<CatchmentProvince, 'organisation' | 'province'> & { organisation?: Maybe<ResolversTypes['OrganisationResult']>, province?: Maybe<ResolversTypes['ProvinceResult']> }>;
  CatchmentProvinceResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['CatchmentProvince'];
  CatchmentProvinceUpdateInput: CatchmentProvinceUpdateInput;
  Country: ResolverTypeWrapper<Country>;
  CountryCode: ResolverTypeWrapper<Scalars['CountryCode']>;
  CountryResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['Country'];
  CountryUpdateInput: CountryUpdateInput;
  CreateCatchmentDistrictInput: CreateCatchmentDistrictInput;
  CreateCatchmentProvinceInput: CreateCatchmentProvinceInput;
  CreateCountryInput: CreateCountryInput;
  CreateDisaggregateInput: CreateDisaggregateInput;
  CreateDisaggregateOptionInput: CreateDisaggregateOptionInput;
  CreateDisaggregateOptionsInput: CreateDisaggregateOptionsInput;
  CreateDisaggregateWithOptionsInput: CreateDisaggregateWithOptionsInput;
  CreateDistrictInput: CreateDistrictInput;
  CreateDistrictUserInput: CreateDistrictUserInput;
  CreateIndicatorDisaggregateInput: CreateIndicatorDisaggregateInput;
  CreateIndicatorDisaggregateReportInput: CreateIndicatorDisaggregateReportInput;
  CreateIndicatorDisaggregatesInput: CreateIndicatorDisaggregatesInput;
  CreateIndicatorInput: CreateIndicatorInput;
  CreateIndicatorUnitInput: CreateIndicatorUnitInput;
  CreateInvitedUserInput: CreateInvitedUserInput;
  CreateOptionInput: CreateOptionInput;
  CreateOrganisationIndicatorInput: CreateOrganisationIndicatorInput;
  CreateOrganisationIndicatorsInput: CreateOrganisationIndicatorsInput;
  CreateOrganisationIndicatorsResult: ResolversTypes['ApiCreateError'] | ResolversTypes['CreateOrganisationIndicatorsSuccess'];
  CreateOrganisationIndicatorsSuccess: ResolverTypeWrapper<CreateOrganisationIndicatorsSuccess>;
  CreateOrganisationInput: CreateOrganisationInput;
  CreateOrganisationReportTemplateInput: CreateOrganisationReportTemplateInput;
  CreateOrganisationReportTemplatesInput: CreateOrganisationReportTemplatesInput;
  CreateOrganisationUserInput: CreateOrganisationUserInput;
  CreateProvinceInput: CreateProvinceInput;
  CreateReportInput: CreateReportInput;
  CreateReportTemplateInput: CreateReportTemplateInput;
  CreateResidenceInput: CreateResidenceInput;
  CreateServiceAreaInput: CreateServiceAreaInput;
  CreateServiceAreaSewerConnectionInput: CreateServiceAreaSewerConnectionInput;
  CreateServiceAreaWaterConnectionInput: CreateServiceAreaWaterConnectionInput;
  CreateSewerNetworkInput: CreateSewerNetworkInput;
  CreateSewerTreatmentPlantInput: CreateSewerTreatmentPlantInput;
  CreateSewerTreatmentPlantPayload: ResolverTypeWrapper<CreateSewerTreatmentPlantPayload>;
  CreateUserInput: CreateUserInput;
  CreateUserInvitationCatchmentDistrictInput: CreateUserInvitationCatchmentDistrictInput;
  CreateUserInvitationInput: CreateUserInvitationInput;
  CreateWaterNetworkInput: CreateWaterNetworkInput;
  CreateWaterProductionSiteInput: CreateWaterProductionSiteInput;
  CreateWaterProductionSitePayload: ResolverTypeWrapper<CreateWaterProductionSitePayload>;
  CreateWaterStorageTankInput: CreateWaterStorageTankInput;
  CreateWaterStorageTankPayload: ResolverTypeWrapper<CreateWaterStorageTankPayload>;
  CreateWaterTreatmentPlantInput: CreateWaterTreatmentPlantInput;
  CreateWaterTreatmentPlantPayload: ResolverTypeWrapper<CreateWaterTreatmentPlantPayload>;
  Currency: ResolverTypeWrapper<Scalars['Currency']>;
  DID: ResolverTypeWrapper<Scalars['DID']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeleteCatchmentDistrictInput: DeleteCatchmentDistrictInput;
  DeleteCatchmentProvinceInput: DeleteCatchmentProvinceInput;
  DeleteCountryInput: DeleteCountryInput;
  DeleteDisaggregateInput: DeleteDisaggregateInput;
  DeleteDisaggregateOptionInput: DeleteDisaggregateOptionInput;
  DeleteDistrictInput: DeleteDistrictInput;
  DeleteDistrictUserInput: DeleteDistrictUserInput;
  DeleteIndicatorDisaggregateInput: DeleteIndicatorDisaggregateInput;
  DeleteIndicatorDisaggregateReportInput: DeleteIndicatorDisaggregateReportInput;
  DeleteIndicatorInput: DeleteIndicatorInput;
  DeleteIndicatorUnitInput: DeleteIndicatorUnitInput;
  DeleteOptionInput: DeleteOptionInput;
  DeleteOrganisationIndicatorInput: DeleteOrganisationIndicatorInput;
  DeleteOrganisationInput: DeleteOrganisationInput;
  DeleteOrganisationReportTemplateInput: DeleteOrganisationReportTemplateInput;
  DeleteOrganisationUserInput: DeleteOrganisationUserInput;
  DeleteProvinceInput: DeleteProvinceInput;
  DeleteReportInput: DeleteReportInput;
  DeleteReportTemplateInput: DeleteReportTemplateInput;
  DeleteResidenceInput: DeleteResidenceInput;
  DeleteServiceAreaInput: DeleteServiceAreaInput;
  DeleteServiceAreaSewerConnectionInput: DeleteServiceAreaSewerConnectionInput;
  DeleteServiceAreaWaterConnectionInput: DeleteServiceAreaWaterConnectionInput;
  DeleteSewerTreatmentPlantsInput: DeleteSewerTreatmentPlantsInput;
  DeleteUserInput: DeleteUserInput;
  DeleteUserInvitationInput: DeleteUserInvitationInput;
  DeleteWaterProductionSiteInput: DeleteWaterProductionSiteInput;
  DeleteWaterProductionSitePayload: ResolverTypeWrapper<DeleteWaterProductionSitePayload>;
  DeleteWaterStorageTankInput: DeleteWaterStorageTankInput;
  DeleteWaterStorageTankPayload: ResolverTypeWrapper<DeleteWaterStorageTankPayload>;
  DeleteWaterTreatmentPlantsInput: DeleteWaterTreatmentPlantsInput;
  DisableUserInput: DisableUserInput;
  Disaggregate: ResolverTypeWrapper<Disaggregate>;
  DisaggregateOption: ResolverTypeWrapper<Omit<DisaggregateOption, 'disaggregate' | 'option'> & { disaggregate?: Maybe<ResolversTypes['DisaggregateResult']>, option?: Maybe<ResolversTypes['OptionResult']> }>;
  DisaggregateOptionResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['DisaggregateOption'];
  DisaggregateResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['Disaggregate'];
  DisaggregateType: DisaggregateType;
  DisaggregateUpdateInput: DisaggregateUpdateInput;
  District: ResolverTypeWrapper<Omit<District, 'province'> & { province?: Maybe<ResolversTypes['ProvinceResult']> }>;
  DistrictResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['District'];
  DistrictUpdateInput: DistrictUpdateInput;
  DistrictUser: ResolverTypeWrapper<Omit<DistrictUser, 'catchment_district' | 'organisation_user'> & { catchment_district?: Maybe<ResolversTypes['CatchmentDistrictResult']>, organisation_user?: Maybe<ResolversTypes['OrganisationUserResult']> }>;
  DistrictUserResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['DistrictUser'];
  DistrictUserRoleType: DistrictUserRoleType;
  Duration: ResolverTypeWrapper<Scalars['Duration']>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>;
  ErrorField: ResolverTypeWrapper<ErrorField>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GUID: ResolverTypeWrapper<Scalars['GUID']>;
  HSL: ResolverTypeWrapper<Scalars['HSL']>;
  HSLA: ResolverTypeWrapper<Scalars['HSLA']>;
  HexColorCode: ResolverTypeWrapper<Scalars['HexColorCode']>;
  Hexadecimal: ResolverTypeWrapper<Scalars['Hexadecimal']>;
  IBAN: ResolverTypeWrapper<Scalars['IBAN']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IPv4: ResolverTypeWrapper<Scalars['IPv4']>;
  IPv6: ResolverTypeWrapper<Scalars['IPv6']>;
  ISBN: ResolverTypeWrapper<Scalars['ISBN']>;
  ISO8601Duration: ResolverTypeWrapper<Scalars['ISO8601Duration']>;
  Indicator: ResolverTypeWrapper<Omit<Indicator, 'indicator_unit' | 'report_template'> & { indicator_unit?: Maybe<ResolversTypes['IndicatorUnitResult']>, report_template?: Maybe<ResolversTypes['ReportTemplateResult']> }>;
  IndicatorDisaggregate: ResolverTypeWrapper<Omit<IndicatorDisaggregate, 'disaggregate_option' | 'organisation_indicator'> & { disaggregate_option?: Maybe<ResolversTypes['DisaggregateOptionResult']>, organisation_indicator?: Maybe<ResolversTypes['OrganisationIndicatorResult']> }>;
  IndicatorDisaggregateReport: ResolverTypeWrapper<Omit<IndicatorDisaggregateReport, 'indicator_disaggregate' | 'report'> & { indicator_disaggregate?: Maybe<ResolversTypes['IndicatorDisaggregateResult']>, report?: Maybe<ResolversTypes['ReportResult']> }>;
  IndicatorDisaggregateReportResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['IndicatorDisaggregateReport'];
  IndicatorDisaggregateReportUpdateInput: IndicatorDisaggregateReportUpdateInput;
  IndicatorDisaggregateResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['IndicatorDisaggregate'];
  IndicatorResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['Indicator'];
  IndicatorType: IndicatorType;
  IndicatorUnit: ResolverTypeWrapper<IndicatorUnit>;
  IndicatorUnitResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['IndicatorUnit'];
  IndicatorUnitUpdateInput: IndicatorUnitUpdateInput;
  IndicatorUpdateInput: IndicatorUpdateInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  JWT: ResolverTypeWrapper<Scalars['JWT']>;
  Latitude: ResolverTypeWrapper<Scalars['Latitude']>;
  LocalDate: ResolverTypeWrapper<Scalars['LocalDate']>;
  LocalEndTime: ResolverTypeWrapper<Scalars['LocalEndTime']>;
  LocalTime: ResolverTypeWrapper<Scalars['LocalTime']>;
  Locale: ResolverTypeWrapper<Scalars['Locale']>;
  LoginInput: LoginInput;
  LoginResult: ResolversTypes['ApiLoginError'] | ResolversTypes['LoginSuccess'];
  LoginSuccess: ResolverTypeWrapper<LoginSuccess>;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  Longitude: ResolverTypeWrapper<Scalars['Longitude']>;
  MAC: ResolverTypeWrapper<Scalars['MAC']>;
  Mutation: ResolverTypeWrapper<{}>;
  NegativeFloat: ResolverTypeWrapper<Scalars['NegativeFloat']>;
  NegativeInt: ResolverTypeWrapper<Scalars['NegativeInt']>;
  NetworkOwnershipType: NetworkOwnershipType;
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']>;
  NonNegativeFloat: ResolverTypeWrapper<Scalars['NonNegativeFloat']>;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']>;
  NonPositiveFloat: ResolverTypeWrapper<Scalars['NonPositiveFloat']>;
  NonPositiveInt: ResolverTypeWrapper<Scalars['NonPositiveInt']>;
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']>;
  Option: ResolverTypeWrapper<Option>;
  OptionResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['Option'];
  OptionUpdateInput: OptionUpdateInput;
  Organisation: ResolverTypeWrapper<Omit<Organisation, 'country'> & { country?: Maybe<ResolversTypes['CountryResult']> }>;
  OrganisationIndicator: ResolverTypeWrapper<Omit<OrganisationIndicator, 'indicator' | 'organisation'> & { indicator?: Maybe<ResolversTypes['IndicatorResult']>, organisation?: Maybe<ResolversTypes['OrganisationResult']> }>;
  OrganisationIndicatorResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['OrganisationIndicator'];
  OrganisationReportTemplate: ResolverTypeWrapper<Omit<OrganisationReportTemplate, 'organisation' | 'report_template'> & { organisation?: Maybe<ResolversTypes['OrganisationResult']>, report_template?: Maybe<ResolversTypes['ReportTemplateResult']> }>;
  OrganisationReportTemplateResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['OrganisationReportTemplate'];
  OrganisationResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['Organisation'];
  OrganisationUpdateInput: OrganisationUpdateInput;
  OrganisationUser: ResolverTypeWrapper<Omit<OrganisationUser, 'default_district' | 'organisation' | 'user'> & { default_district?: Maybe<ResolversTypes['DistrictResult']>, organisation?: Maybe<ResolversTypes['OrganisationResult']>, user?: Maybe<ResolversTypes['UserResult']> }>;
  OrganisationUserResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['OrganisationUser'];
  OrganisationUserRoleType: OrganisationUserRoleType;
  OrganisationUserUpdateInput: OrganisationUserUpdateInput;
  PasswordResetInput: PasswordResetInput;
  PasswordResetRequestInput: PasswordResetRequestInput;
  PasswordResetRequestPayload: ResolverTypeWrapper<PasswordResetRequestPayload>;
  PasswordResetRequestResult: ResolversTypes['ApiPasswordResetError'] | ResolversTypes['PasswordResetRequestPayload'];
  PasswordResetResult: ResolversTypes['ApiPasswordResetError'] | ResolversTypes['User'];
  PhoneNumber: ResolverTypeWrapper<Scalars['PhoneNumber']>;
  Port: ResolverTypeWrapper<Scalars['Port']>;
  PositiveFloat: ResolverTypeWrapper<Scalars['PositiveFloat']>;
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']>;
  PostalCode: ResolverTypeWrapper<Scalars['PostalCode']>;
  Province: ResolverTypeWrapper<Omit<Province, 'country'> & { country?: Maybe<ResolversTypes['CountryResult']> }>;
  ProvinceResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['Province'];
  ProvinceUpdateInput: ProvinceUpdateInput;
  Query: ResolverTypeWrapper<{}>;
  RGB: ResolverTypeWrapper<Scalars['RGB']>;
  RGBA: ResolverTypeWrapper<Scalars['RGBA']>;
  Report: ResolverTypeWrapper<Omit<Report, 'catchment_district' | 'organisation_report_template'> & { catchment_district?: Maybe<ResolversTypes['CatchmentDistrictResult']>, organisation_report_template?: Maybe<ResolversTypes['OrganisationReportTemplateResult']> }>;
  ReportResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['Report'];
  ReportTemplate: ResolverTypeWrapper<ReportTemplate>;
  ReportTemplateResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['ReportTemplate'];
  ReportTemplateUpdateInput: ReportTemplateUpdateInput;
  ReportUpdateInput: ReportUpdateInput;
  ReportingFrequency: ReportingFrequency;
  Residence: ResolverTypeWrapper<Omit<Residence, 'district'> & { district?: Maybe<ResolversTypes['DistrictResult']> }>;
  ResidenceClassification: ResidenceClassification;
  ResidenceResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['Residence'];
  ResidenceUpdateInput: ResidenceUpdateInput;
  RoutingNumber: ResolverTypeWrapper<Scalars['RoutingNumber']>;
  SafeInt: ResolverTypeWrapper<Scalars['SafeInt']>;
  SearchUserInvitationsInput: SearchUserInvitationsInput;
  ServiceArea: ResolverTypeWrapper<Omit<ServiceArea, 'catchment_district' | 'residence'> & { catchment_district: ResolversTypes['CatchmentDistrictResult'], residence?: Maybe<ResolversTypes['ResidenceResult']> }>;
  ServiceAreaResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['ServiceArea'];
  ServiceAreaSewerConnection: ResolverTypeWrapper<Omit<ServiceAreaSewerConnection, 'service_area' | 'sewer_network'> & { service_area?: Maybe<ResolversTypes['ServiceAreaResult']>, sewer_network?: Maybe<ResolversTypes['SewerNetworkResult']> }>;
  ServiceAreaSewerConnectionResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['ServiceAreaSewerConnection'];
  ServiceAreaSewerConnectionUpdateInput: ServiceAreaSewerConnectionUpdateInput;
  ServiceAreaWaterConnection: ResolverTypeWrapper<Omit<ServiceAreaWaterConnection, 'service_area' | 'water_network'> & { service_area?: Maybe<ResolversTypes['ServiceAreaResult']>, water_network?: Maybe<ResolversTypes['WaterNetworkResult']> }>;
  ServiceAreaWaterConnectionResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['ServiceAreaWaterConnection'];
  ServiceAreaWaterConnectionUpdateInput: ServiceAreaWaterConnectionUpdateInput;
  SetUserDefaultDistrictInput: SetUserDefaultDistrictInput;
  SewerNetwork: ResolverTypeWrapper<Omit<SewerNetwork, 'sewer_treatment_plant'> & { sewer_treatment_plant?: Maybe<ResolversTypes['SewerTreatmentPlantResult']> }>;
  SewerNetworkResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['SewerNetwork'];
  SewerNetworkUpdateInput: SewerNetworkUpdateInput;
  SewerTreatmentPlant: ResolverTypeWrapper<Omit<SewerTreatmentPlant, 'catchment_district' | 'sewer_network'> & { catchment_district?: Maybe<ResolversTypes['CatchmentDistrictResult']>, sewer_network?: Maybe<ResolversTypes['SewerNetworkResult']> }>;
  SewerTreatmentPlantResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['SewerTreatmentPlant'];
  SewerTreatmentPlantUpdateInput: SewerTreatmentPlantUpdateInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  TimeZone: ResolverTypeWrapper<Scalars['TimeZone']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  USCurrency: ResolverTypeWrapper<Scalars['USCurrency']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']>;
  UnsignedFloat: ResolverTypeWrapper<Scalars['UnsignedFloat']>;
  UnsignedInt: ResolverTypeWrapper<Scalars['UnsignedInt']>;
  UpdateCatchmentDistrictInput: UpdateCatchmentDistrictInput;
  UpdateCatchmentProvinceInput: UpdateCatchmentProvinceInput;
  UpdateCountryInput: UpdateCountryInput;
  UpdateDisaggregateInput: UpdateDisaggregateInput;
  UpdateDistrictInput: UpdateDistrictInput;
  UpdateIndicatorDisaggregateReportInput: UpdateIndicatorDisaggregateReportInput;
  UpdateIndicatorInput: UpdateIndicatorInput;
  UpdateIndicatorUnitInput: UpdateIndicatorUnitInput;
  UpdateOptionInput: UpdateOptionInput;
  UpdateOrganisationInput: UpdateOrganisationInput;
  UpdateOrganisationUserInput: UpdateOrganisationUserInput;
  UpdateProvinceInput: UpdateProvinceInput;
  UpdateReportInput: UpdateReportInput;
  UpdateReportTemplateInput: UpdateReportTemplateInput;
  UpdateResidenceInput: UpdateResidenceInput;
  UpdateServiceAreaSewerConnectionInput: UpdateServiceAreaSewerConnectionInput;
  UpdateServiceAreaWaterConnectionInput: UpdateServiceAreaWaterConnectionInput;
  UpdateSewerNetworkInput: UpdateSewerNetworkInput;
  UpdateSewerTreatmentPlantInput: UpdateSewerTreatmentPlantInput;
  UpdateSewerTreatmentPlantPayload: ResolverTypeWrapper<UpdateSewerTreatmentPlantPayload>;
  UpdateUserInput: UpdateUserInput;
  UpdateUserRolesForDistrictInput: UpdateUserRolesForDistrictInput;
  UpdateWaterNetworkInput: UpdateWaterNetworkInput;
  UpdateWaterProductionSiteInput: UpdateWaterProductionSiteInput;
  UpdateWaterProductionSitePayload: ResolverTypeWrapper<UpdateWaterProductionSitePayload>;
  UpdateWaterStorageTankInput: UpdateWaterStorageTankInput;
  UpdateWaterStorageTankPayload: ResolverTypeWrapper<UpdateWaterStorageTankPayload>;
  UpdateWaterTreatmentPlantInput: UpdateWaterTreatmentPlantInput;
  UpdateWaterTreatmentPlantPayload: ResolverTypeWrapper<UpdateWaterTreatmentPlantPayload>;
  User: ResolverTypeWrapper<User>;
  UserDisableInput: UserDisableInput;
  UserInvitation: ResolverTypeWrapper<UserInvitation>;
  UserInvitationResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['UserInvitation'];
  UserResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['User'];
  UserTheme: UserTheme;
  UserUpdateInput: UserUpdateInput;
  UtcOffset: ResolverTypeWrapper<Scalars['UtcOffset']>;
  Void: ResolverTypeWrapper<Scalars['Void']>;
  WaterNetwork: ResolverTypeWrapper<Omit<WaterNetwork, 'water_treatment_plant'> & { water_treatment_plant?: Maybe<ResolversTypes['WaterTreatmentPlantResult']> }>;
  WaterNetworkResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['WaterNetwork'];
  WaterNetworkUpdateInput: WaterNetworkUpdateInput;
  WaterProductionSite: ResolverTypeWrapper<Omit<WaterProductionSite, 'water_treatment_plant'> & { water_treatment_plant?: Maybe<ResolversTypes['WaterTreatmentPlantResult']> }>;
  WaterProductionSiteType: WaterProductionSiteType;
  WaterProductionSiteUpdateInput: WaterProductionSiteUpdateInput;
  WaterSourceType: WaterSourceType;
  WaterStorageTank: ResolverTypeWrapper<Omit<WaterStorageTank, 'water_treatment_plant'> & { water_treatment_plant?: Maybe<ResolversTypes['WaterTreatmentPlantResult']> }>;
  WaterStorageTankType: WaterStorageTankType;
  WaterStorageTankUpdateInput: WaterStorageTankUpdateInput;
  WaterTreatmentPlant: ResolverTypeWrapper<Omit<WaterTreatmentPlant, 'catchment_district' | 'water_network'> & { catchment_district?: Maybe<ResolversTypes['CatchmentDistrictResult']>, water_network: ResolversTypes['WaterNetworkResult'] }>;
  WaterTreatmentPlantResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['WaterTreatmentPlant'];
  WaterTreatmentPlantUpdateInput: WaterTreatmentPlantUpdateInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AccountNumber: Scalars['AccountNumber'];
  ApiBatchPayload: ApiBatchPayload;
  ApiBatchPayloadResult: ResolversParentTypes['ApiBatchPayload'] | ResolversParentTypes['ApiOperationError'];
  ApiCreateError: ApiCreateError;
  ApiDeleteError: ApiDeleteError;
  ApiError: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiLoginError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiOperationError'] | ResolversParentTypes['ApiPasswordResetError'] | ResolversParentTypes['ApiUpdateError'];
  ApiLoginError: ApiLoginError;
  ApiNotFoundError: ApiNotFoundError;
  ApiOperationError: ApiOperationError;
  ApiPasswordResetError: ApiPasswordResetError;
  ApiUpdateError: ApiUpdateError;
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  Byte: Scalars['Byte'];
  CatchmentDistrict: Omit<CatchmentDistrict, 'catchment_province' | 'district'> & { catchment_province?: Maybe<ResolversParentTypes['CatchmentProvinceResult']>, district?: Maybe<ResolversParentTypes['DistrictResult']> };
  CatchmentDistrictInput: CatchmentDistrictInput;
  CatchmentDistrictResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['CatchmentDistrict'];
  CatchmentDistrictUpdateInput: CatchmentDistrictUpdateInput;
  CatchmentProvince: Omit<CatchmentProvince, 'organisation' | 'province'> & { organisation?: Maybe<ResolversParentTypes['OrganisationResult']>, province?: Maybe<ResolversParentTypes['ProvinceResult']> };
  CatchmentProvinceResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['CatchmentProvince'];
  CatchmentProvinceUpdateInput: CatchmentProvinceUpdateInput;
  Country: Country;
  CountryCode: Scalars['CountryCode'];
  CountryResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['Country'];
  CountryUpdateInput: CountryUpdateInput;
  CreateCatchmentDistrictInput: CreateCatchmentDistrictInput;
  CreateCatchmentProvinceInput: CreateCatchmentProvinceInput;
  CreateCountryInput: CreateCountryInput;
  CreateDisaggregateInput: CreateDisaggregateInput;
  CreateDisaggregateOptionInput: CreateDisaggregateOptionInput;
  CreateDisaggregateOptionsInput: CreateDisaggregateOptionsInput;
  CreateDisaggregateWithOptionsInput: CreateDisaggregateWithOptionsInput;
  CreateDistrictInput: CreateDistrictInput;
  CreateDistrictUserInput: CreateDistrictUserInput;
  CreateIndicatorDisaggregateInput: CreateIndicatorDisaggregateInput;
  CreateIndicatorDisaggregateReportInput: CreateIndicatorDisaggregateReportInput;
  CreateIndicatorDisaggregatesInput: CreateIndicatorDisaggregatesInput;
  CreateIndicatorInput: CreateIndicatorInput;
  CreateIndicatorUnitInput: CreateIndicatorUnitInput;
  CreateInvitedUserInput: CreateInvitedUserInput;
  CreateOptionInput: CreateOptionInput;
  CreateOrganisationIndicatorInput: CreateOrganisationIndicatorInput;
  CreateOrganisationIndicatorsInput: CreateOrganisationIndicatorsInput;
  CreateOrganisationIndicatorsResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['CreateOrganisationIndicatorsSuccess'];
  CreateOrganisationIndicatorsSuccess: CreateOrganisationIndicatorsSuccess;
  CreateOrganisationInput: CreateOrganisationInput;
  CreateOrganisationReportTemplateInput: CreateOrganisationReportTemplateInput;
  CreateOrganisationReportTemplatesInput: CreateOrganisationReportTemplatesInput;
  CreateOrganisationUserInput: CreateOrganisationUserInput;
  CreateProvinceInput: CreateProvinceInput;
  CreateReportInput: CreateReportInput;
  CreateReportTemplateInput: CreateReportTemplateInput;
  CreateResidenceInput: CreateResidenceInput;
  CreateServiceAreaInput: CreateServiceAreaInput;
  CreateServiceAreaSewerConnectionInput: CreateServiceAreaSewerConnectionInput;
  CreateServiceAreaWaterConnectionInput: CreateServiceAreaWaterConnectionInput;
  CreateSewerNetworkInput: CreateSewerNetworkInput;
  CreateSewerTreatmentPlantInput: CreateSewerTreatmentPlantInput;
  CreateSewerTreatmentPlantPayload: CreateSewerTreatmentPlantPayload;
  CreateUserInput: CreateUserInput;
  CreateUserInvitationCatchmentDistrictInput: CreateUserInvitationCatchmentDistrictInput;
  CreateUserInvitationInput: CreateUserInvitationInput;
  CreateWaterNetworkInput: CreateWaterNetworkInput;
  CreateWaterProductionSiteInput: CreateWaterProductionSiteInput;
  CreateWaterProductionSitePayload: CreateWaterProductionSitePayload;
  CreateWaterStorageTankInput: CreateWaterStorageTankInput;
  CreateWaterStorageTankPayload: CreateWaterStorageTankPayload;
  CreateWaterTreatmentPlantInput: CreateWaterTreatmentPlantInput;
  CreateWaterTreatmentPlantPayload: CreateWaterTreatmentPlantPayload;
  Currency: Scalars['Currency'];
  DID: Scalars['DID'];
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  DeleteCatchmentDistrictInput: DeleteCatchmentDistrictInput;
  DeleteCatchmentProvinceInput: DeleteCatchmentProvinceInput;
  DeleteCountryInput: DeleteCountryInput;
  DeleteDisaggregateInput: DeleteDisaggregateInput;
  DeleteDisaggregateOptionInput: DeleteDisaggregateOptionInput;
  DeleteDistrictInput: DeleteDistrictInput;
  DeleteDistrictUserInput: DeleteDistrictUserInput;
  DeleteIndicatorDisaggregateInput: DeleteIndicatorDisaggregateInput;
  DeleteIndicatorDisaggregateReportInput: DeleteIndicatorDisaggregateReportInput;
  DeleteIndicatorInput: DeleteIndicatorInput;
  DeleteIndicatorUnitInput: DeleteIndicatorUnitInput;
  DeleteOptionInput: DeleteOptionInput;
  DeleteOrganisationIndicatorInput: DeleteOrganisationIndicatorInput;
  DeleteOrganisationInput: DeleteOrganisationInput;
  DeleteOrganisationReportTemplateInput: DeleteOrganisationReportTemplateInput;
  DeleteOrganisationUserInput: DeleteOrganisationUserInput;
  DeleteProvinceInput: DeleteProvinceInput;
  DeleteReportInput: DeleteReportInput;
  DeleteReportTemplateInput: DeleteReportTemplateInput;
  DeleteResidenceInput: DeleteResidenceInput;
  DeleteServiceAreaInput: DeleteServiceAreaInput;
  DeleteServiceAreaSewerConnectionInput: DeleteServiceAreaSewerConnectionInput;
  DeleteServiceAreaWaterConnectionInput: DeleteServiceAreaWaterConnectionInput;
  DeleteSewerTreatmentPlantsInput: DeleteSewerTreatmentPlantsInput;
  DeleteUserInput: DeleteUserInput;
  DeleteUserInvitationInput: DeleteUserInvitationInput;
  DeleteWaterProductionSiteInput: DeleteWaterProductionSiteInput;
  DeleteWaterProductionSitePayload: DeleteWaterProductionSitePayload;
  DeleteWaterStorageTankInput: DeleteWaterStorageTankInput;
  DeleteWaterStorageTankPayload: DeleteWaterStorageTankPayload;
  DeleteWaterTreatmentPlantsInput: DeleteWaterTreatmentPlantsInput;
  DisableUserInput: DisableUserInput;
  Disaggregate: Disaggregate;
  DisaggregateOption: Omit<DisaggregateOption, 'disaggregate' | 'option'> & { disaggregate?: Maybe<ResolversParentTypes['DisaggregateResult']>, option?: Maybe<ResolversParentTypes['OptionResult']> };
  DisaggregateOptionResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['DisaggregateOption'];
  DisaggregateResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['Disaggregate'];
  DisaggregateUpdateInput: DisaggregateUpdateInput;
  District: Omit<District, 'province'> & { province?: Maybe<ResolversParentTypes['ProvinceResult']> };
  DistrictResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['District'];
  DistrictUpdateInput: DistrictUpdateInput;
  DistrictUser: Omit<DistrictUser, 'catchment_district' | 'organisation_user'> & { catchment_district?: Maybe<ResolversParentTypes['CatchmentDistrictResult']>, organisation_user?: Maybe<ResolversParentTypes['OrganisationUserResult']> };
  DistrictUserResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['DistrictUser'];
  Duration: Scalars['Duration'];
  EmailAddress: Scalars['EmailAddress'];
  ErrorField: ErrorField;
  Float: Scalars['Float'];
  GUID: Scalars['GUID'];
  HSL: Scalars['HSL'];
  HSLA: Scalars['HSLA'];
  HexColorCode: Scalars['HexColorCode'];
  Hexadecimal: Scalars['Hexadecimal'];
  IBAN: Scalars['IBAN'];
  ID: Scalars['ID'];
  IPv4: Scalars['IPv4'];
  IPv6: Scalars['IPv6'];
  ISBN: Scalars['ISBN'];
  ISO8601Duration: Scalars['ISO8601Duration'];
  Indicator: Omit<Indicator, 'indicator_unit' | 'report_template'> & { indicator_unit?: Maybe<ResolversParentTypes['IndicatorUnitResult']>, report_template?: Maybe<ResolversParentTypes['ReportTemplateResult']> };
  IndicatorDisaggregate: Omit<IndicatorDisaggregate, 'disaggregate_option' | 'organisation_indicator'> & { disaggregate_option?: Maybe<ResolversParentTypes['DisaggregateOptionResult']>, organisation_indicator?: Maybe<ResolversParentTypes['OrganisationIndicatorResult']> };
  IndicatorDisaggregateReport: Omit<IndicatorDisaggregateReport, 'indicator_disaggregate' | 'report'> & { indicator_disaggregate?: Maybe<ResolversParentTypes['IndicatorDisaggregateResult']>, report?: Maybe<ResolversParentTypes['ReportResult']> };
  IndicatorDisaggregateReportResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['IndicatorDisaggregateReport'];
  IndicatorDisaggregateReportUpdateInput: IndicatorDisaggregateReportUpdateInput;
  IndicatorDisaggregateResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['IndicatorDisaggregate'];
  IndicatorResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['Indicator'];
  IndicatorUnit: IndicatorUnit;
  IndicatorUnitResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['IndicatorUnit'];
  IndicatorUnitUpdateInput: IndicatorUnitUpdateInput;
  IndicatorUpdateInput: IndicatorUpdateInput;
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  JWT: Scalars['JWT'];
  Latitude: Scalars['Latitude'];
  LocalDate: Scalars['LocalDate'];
  LocalEndTime: Scalars['LocalEndTime'];
  LocalTime: Scalars['LocalTime'];
  Locale: Scalars['Locale'];
  LoginInput: LoginInput;
  LoginResult: ResolversParentTypes['ApiLoginError'] | ResolversParentTypes['LoginSuccess'];
  LoginSuccess: LoginSuccess;
  Long: Scalars['Long'];
  Longitude: Scalars['Longitude'];
  MAC: Scalars['MAC'];
  Mutation: {};
  NegativeFloat: Scalars['NegativeFloat'];
  NegativeInt: Scalars['NegativeInt'];
  NonEmptyString: Scalars['NonEmptyString'];
  NonNegativeFloat: Scalars['NonNegativeFloat'];
  NonNegativeInt: Scalars['NonNegativeInt'];
  NonPositiveFloat: Scalars['NonPositiveFloat'];
  NonPositiveInt: Scalars['NonPositiveInt'];
  ObjectID: Scalars['ObjectID'];
  Option: Option;
  OptionResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['Option'];
  OptionUpdateInput: OptionUpdateInput;
  Organisation: Omit<Organisation, 'country'> & { country?: Maybe<ResolversParentTypes['CountryResult']> };
  OrganisationIndicator: Omit<OrganisationIndicator, 'indicator' | 'organisation'> & { indicator?: Maybe<ResolversParentTypes['IndicatorResult']>, organisation?: Maybe<ResolversParentTypes['OrganisationResult']> };
  OrganisationIndicatorResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['OrganisationIndicator'];
  OrganisationReportTemplate: Omit<OrganisationReportTemplate, 'organisation' | 'report_template'> & { organisation?: Maybe<ResolversParentTypes['OrganisationResult']>, report_template?: Maybe<ResolversParentTypes['ReportTemplateResult']> };
  OrganisationReportTemplateResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['OrganisationReportTemplate'];
  OrganisationResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['Organisation'];
  OrganisationUpdateInput: OrganisationUpdateInput;
  OrganisationUser: Omit<OrganisationUser, 'default_district' | 'organisation' | 'user'> & { default_district?: Maybe<ResolversParentTypes['DistrictResult']>, organisation?: Maybe<ResolversParentTypes['OrganisationResult']>, user?: Maybe<ResolversParentTypes['UserResult']> };
  OrganisationUserResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['OrganisationUser'];
  OrganisationUserUpdateInput: OrganisationUserUpdateInput;
  PasswordResetInput: PasswordResetInput;
  PasswordResetRequestInput: PasswordResetRequestInput;
  PasswordResetRequestPayload: PasswordResetRequestPayload;
  PasswordResetRequestResult: ResolversParentTypes['ApiPasswordResetError'] | ResolversParentTypes['PasswordResetRequestPayload'];
  PasswordResetResult: ResolversParentTypes['ApiPasswordResetError'] | ResolversParentTypes['User'];
  PhoneNumber: Scalars['PhoneNumber'];
  Port: Scalars['Port'];
  PositiveFloat: Scalars['PositiveFloat'];
  PositiveInt: Scalars['PositiveInt'];
  PostalCode: Scalars['PostalCode'];
  Province: Omit<Province, 'country'> & { country?: Maybe<ResolversParentTypes['CountryResult']> };
  ProvinceResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['Province'];
  ProvinceUpdateInput: ProvinceUpdateInput;
  Query: {};
  RGB: Scalars['RGB'];
  RGBA: Scalars['RGBA'];
  Report: Omit<Report, 'catchment_district' | 'organisation_report_template'> & { catchment_district?: Maybe<ResolversParentTypes['CatchmentDistrictResult']>, organisation_report_template?: Maybe<ResolversParentTypes['OrganisationReportTemplateResult']> };
  ReportResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['Report'];
  ReportTemplate: ReportTemplate;
  ReportTemplateResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['ReportTemplate'];
  ReportTemplateUpdateInput: ReportTemplateUpdateInput;
  ReportUpdateInput: ReportUpdateInput;
  Residence: Omit<Residence, 'district'> & { district?: Maybe<ResolversParentTypes['DistrictResult']> };
  ResidenceResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['Residence'];
  ResidenceUpdateInput: ResidenceUpdateInput;
  RoutingNumber: Scalars['RoutingNumber'];
  SafeInt: Scalars['SafeInt'];
  SearchUserInvitationsInput: SearchUserInvitationsInput;
  ServiceArea: Omit<ServiceArea, 'catchment_district' | 'residence'> & { catchment_district: ResolversParentTypes['CatchmentDistrictResult'], residence?: Maybe<ResolversParentTypes['ResidenceResult']> };
  ServiceAreaResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['ServiceArea'];
  ServiceAreaSewerConnection: Omit<ServiceAreaSewerConnection, 'service_area' | 'sewer_network'> & { service_area?: Maybe<ResolversParentTypes['ServiceAreaResult']>, sewer_network?: Maybe<ResolversParentTypes['SewerNetworkResult']> };
  ServiceAreaSewerConnectionResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['ServiceAreaSewerConnection'];
  ServiceAreaSewerConnectionUpdateInput: ServiceAreaSewerConnectionUpdateInput;
  ServiceAreaWaterConnection: Omit<ServiceAreaWaterConnection, 'service_area' | 'water_network'> & { service_area?: Maybe<ResolversParentTypes['ServiceAreaResult']>, water_network?: Maybe<ResolversParentTypes['WaterNetworkResult']> };
  ServiceAreaWaterConnectionResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['ServiceAreaWaterConnection'];
  ServiceAreaWaterConnectionUpdateInput: ServiceAreaWaterConnectionUpdateInput;
  SetUserDefaultDistrictInput: SetUserDefaultDistrictInput;
  SewerNetwork: Omit<SewerNetwork, 'sewer_treatment_plant'> & { sewer_treatment_plant?: Maybe<ResolversParentTypes['SewerTreatmentPlantResult']> };
  SewerNetworkResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['SewerNetwork'];
  SewerNetworkUpdateInput: SewerNetworkUpdateInput;
  SewerTreatmentPlant: Omit<SewerTreatmentPlant, 'catchment_district' | 'sewer_network'> & { catchment_district?: Maybe<ResolversParentTypes['CatchmentDistrictResult']>, sewer_network?: Maybe<ResolversParentTypes['SewerNetworkResult']> };
  SewerTreatmentPlantResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['SewerTreatmentPlant'];
  SewerTreatmentPlantUpdateInput: SewerTreatmentPlantUpdateInput;
  String: Scalars['String'];
  Time: Scalars['Time'];
  TimeZone: Scalars['TimeZone'];
  Timestamp: Scalars['Timestamp'];
  URL: Scalars['URL'];
  USCurrency: Scalars['USCurrency'];
  UUID: Scalars['UUID'];
  UnsignedFloat: Scalars['UnsignedFloat'];
  UnsignedInt: Scalars['UnsignedInt'];
  UpdateCatchmentDistrictInput: UpdateCatchmentDistrictInput;
  UpdateCatchmentProvinceInput: UpdateCatchmentProvinceInput;
  UpdateCountryInput: UpdateCountryInput;
  UpdateDisaggregateInput: UpdateDisaggregateInput;
  UpdateDistrictInput: UpdateDistrictInput;
  UpdateIndicatorDisaggregateReportInput: UpdateIndicatorDisaggregateReportInput;
  UpdateIndicatorInput: UpdateIndicatorInput;
  UpdateIndicatorUnitInput: UpdateIndicatorUnitInput;
  UpdateOptionInput: UpdateOptionInput;
  UpdateOrganisationInput: UpdateOrganisationInput;
  UpdateOrganisationUserInput: UpdateOrganisationUserInput;
  UpdateProvinceInput: UpdateProvinceInput;
  UpdateReportInput: UpdateReportInput;
  UpdateReportTemplateInput: UpdateReportTemplateInput;
  UpdateResidenceInput: UpdateResidenceInput;
  UpdateServiceAreaSewerConnectionInput: UpdateServiceAreaSewerConnectionInput;
  UpdateServiceAreaWaterConnectionInput: UpdateServiceAreaWaterConnectionInput;
  UpdateSewerNetworkInput: UpdateSewerNetworkInput;
  UpdateSewerTreatmentPlantInput: UpdateSewerTreatmentPlantInput;
  UpdateSewerTreatmentPlantPayload: UpdateSewerTreatmentPlantPayload;
  UpdateUserInput: UpdateUserInput;
  UpdateUserRolesForDistrictInput: UpdateUserRolesForDistrictInput;
  UpdateWaterNetworkInput: UpdateWaterNetworkInput;
  UpdateWaterProductionSiteInput: UpdateWaterProductionSiteInput;
  UpdateWaterProductionSitePayload: UpdateWaterProductionSitePayload;
  UpdateWaterStorageTankInput: UpdateWaterStorageTankInput;
  UpdateWaterStorageTankPayload: UpdateWaterStorageTankPayload;
  UpdateWaterTreatmentPlantInput: UpdateWaterTreatmentPlantInput;
  UpdateWaterTreatmentPlantPayload: UpdateWaterTreatmentPlantPayload;
  User: User;
  UserDisableInput: UserDisableInput;
  UserInvitation: UserInvitation;
  UserInvitationResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['UserInvitation'];
  UserResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['User'];
  UserUpdateInput: UserUpdateInput;
  UtcOffset: Scalars['UtcOffset'];
  Void: Scalars['Void'];
  WaterNetwork: Omit<WaterNetwork, 'water_treatment_plant'> & { water_treatment_plant?: Maybe<ResolversParentTypes['WaterTreatmentPlantResult']> };
  WaterNetworkResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['WaterNetwork'];
  WaterNetworkUpdateInput: WaterNetworkUpdateInput;
  WaterProductionSite: Omit<WaterProductionSite, 'water_treatment_plant'> & { water_treatment_plant?: Maybe<ResolversParentTypes['WaterTreatmentPlantResult']> };
  WaterProductionSiteUpdateInput: WaterProductionSiteUpdateInput;
  WaterStorageTank: Omit<WaterStorageTank, 'water_treatment_plant'> & { water_treatment_plant?: Maybe<ResolversParentTypes['WaterTreatmentPlantResult']> };
  WaterStorageTankUpdateInput: WaterStorageTankUpdateInput;
  WaterTreatmentPlant: Omit<WaterTreatmentPlant, 'catchment_district' | 'water_network'> & { catchment_district?: Maybe<ResolversParentTypes['CatchmentDistrictResult']>, water_network: ResolversParentTypes['WaterNetworkResult'] };
  WaterTreatmentPlantResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['WaterTreatmentPlant'];
  WaterTreatmentPlantUpdateInput: WaterTreatmentPlantUpdateInput;
}>;

export interface AccountNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AccountNumber'], any> {
  name: 'AccountNumber';
}

export type ApiBatchPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ApiBatchPayload'] = ResolversParentTypes['ApiBatchPayload']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiBatchPayloadResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ApiBatchPayloadResult'] = ResolversParentTypes['ApiBatchPayloadResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiBatchPayload' | 'ApiOperationError', ParentType, ContextType>;
}>;

export type ApiCreateErrorResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ApiCreateError'] = ResolversParentTypes['ApiCreateError']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<ResolversTypes['ErrorField']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiDeleteErrorResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ApiDeleteError'] = ResolversParentTypes['ApiDeleteError']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<ResolversTypes['ErrorField']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiErrorResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ApiError'] = ResolversParentTypes['ApiError']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiLoginError' | 'ApiNotFoundError' | 'ApiOperationError' | 'ApiPasswordResetError' | 'ApiUpdateError', ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type ApiLoginErrorResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ApiLoginError'] = ResolversParentTypes['ApiLoginError']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<ResolversTypes['ErrorField']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiNotFoundErrorResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ApiNotFoundError'] = ResolversParentTypes['ApiNotFoundError']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<ResolversTypes['ErrorField']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiOperationErrorResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ApiOperationError'] = ResolversParentTypes['ApiOperationError']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<ResolversTypes['ErrorField']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiPasswordResetErrorResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ApiPasswordResetError'] = ResolversParentTypes['ApiPasswordResetError']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<ResolversTypes['ErrorField']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiUpdateErrorResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ApiUpdateError'] = ResolversParentTypes['ApiUpdateError']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<ResolversTypes['ErrorField']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface ByteScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Byte'], any> {
  name: 'Byte';
}

export type CatchmentDistrictResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CatchmentDistrict'] = ResolversParentTypes['CatchmentDistrict']> = ResolversObject<{
  catchment_province?: Resolver<Maybe<ResolversTypes['CatchmentProvinceResult']>, ParentType, ContextType>;
  catchment_province_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  disabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  district?: Resolver<Maybe<ResolversTypes['DistrictResult']>, ParentType, ContextType>;
  district_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  district_users?: Resolver<Maybe<Array<ResolversTypes['DistrictUser']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reports?: Resolver<Maybe<Array<ResolversTypes['Report']>>, ParentType, ContextType>;
  service_areas?: Resolver<Maybe<Array<ResolversTypes['ServiceArea']>>, ParentType, ContextType>;
  sewer_treatment_plants?: Resolver<Maybe<Array<ResolversTypes['SewerTreatmentPlant']>>, ParentType, ContextType>;
  water_treatment_plants?: Resolver<Maybe<Array<ResolversTypes['WaterTreatmentPlant']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatchmentDistrictResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CatchmentDistrictResult'] = ResolversParentTypes['CatchmentDistrictResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'CatchmentDistrict', ParentType, ContextType>;
}>;

export type CatchmentProvinceResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CatchmentProvince'] = ResolversParentTypes['CatchmentProvince']> = ResolversObject<{
  catchment_districts?: Resolver<Maybe<Array<ResolversTypes['CatchmentDistrict']>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  created_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  disabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  last_modified_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organisation?: Resolver<Maybe<ResolversTypes['OrganisationResult']>, ParentType, ContextType>;
  organisation_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['ProvinceResult']>, ParentType, ContextType>;
  province_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatchmentProvinceResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CatchmentProvinceResult'] = ResolversParentTypes['CatchmentProvinceResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'CatchmentProvince', ParentType, ContextType>;
}>;

export type CountryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  flag?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organisations?: Resolver<Maybe<Array<ResolversTypes['Organisation']>>, ParentType, ContextType>;
  provinces?: Resolver<Maybe<Array<ResolversTypes['Province']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface CountryCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CountryCode'], any> {
  name: 'CountryCode';
}

export type CountryResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CountryResult'] = ResolversParentTypes['CountryResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'Country', ParentType, ContextType>;
}>;

export type CreateOrganisationIndicatorsResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateOrganisationIndicatorsResult'] = ResolversParentTypes['CreateOrganisationIndicatorsResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'CreateOrganisationIndicatorsSuccess', ParentType, ContextType>;
}>;

export type CreateOrganisationIndicatorsSuccessResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateOrganisationIndicatorsSuccess'] = ResolversParentTypes['CreateOrganisationIndicatorsSuccess']> = ResolversObject<{
  organisation_indicators?: Resolver<Array<ResolversTypes['OrganisationIndicator']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateSewerTreatmentPlantPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateSewerTreatmentPlantPayload'] = ResolversParentTypes['CreateSewerTreatmentPlantPayload']> = ResolversObject<{
  sewer_treatment_plant?: Resolver<ResolversTypes['SewerTreatmentPlant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateWaterProductionSitePayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateWaterProductionSitePayload'] = ResolversParentTypes['CreateWaterProductionSitePayload']> = ResolversObject<{
  water_production_site?: Resolver<ResolversTypes['WaterProductionSite'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateWaterStorageTankPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateWaterStorageTankPayload'] = ResolversParentTypes['CreateWaterStorageTankPayload']> = ResolversObject<{
  water_storage_tank?: Resolver<ResolversTypes['WaterStorageTank'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateWaterTreatmentPlantPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateWaterTreatmentPlantPayload'] = ResolversParentTypes['CreateWaterTreatmentPlantPayload']> = ResolversObject<{
  water_treatment_plant?: Resolver<ResolversTypes['WaterTreatmentPlant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface CurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Currency'], any> {
  name: 'Currency';
}

export interface DidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DID'], any> {
  name: 'DID';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteWaterProductionSitePayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DeleteWaterProductionSitePayload'] = ResolversParentTypes['DeleteWaterProductionSitePayload']> = ResolversObject<{
  water_production_site?: Resolver<ResolversTypes['WaterProductionSite'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteWaterStorageTankPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DeleteWaterStorageTankPayload'] = ResolversParentTypes['DeleteWaterStorageTankPayload']> = ResolversObject<{
  water_storage_tank?: Resolver<ResolversTypes['WaterStorageTank'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DisaggregateResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Disaggregate'] = ResolversParentTypes['Disaggregate']> = ResolversObject<{
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  disaggregate_options?: Resolver<Maybe<Array<ResolversTypes['DisaggregateOption']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['DisaggregateType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DisaggregateOptionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DisaggregateOption'] = ResolversParentTypes['DisaggregateOption']> = ResolversObject<{
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  disaggregate?: Resolver<Maybe<ResolversTypes['DisaggregateResult']>, ParentType, ContextType>;
  disaggregate_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  indicator_disaggregates?: Resolver<Maybe<Array<ResolversTypes['IndicatorDisaggregate']>>, ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  option?: Resolver<Maybe<ResolversTypes['OptionResult']>, ParentType, ContextType>;
  option_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DisaggregateOptionResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DisaggregateOptionResult'] = ResolversParentTypes['DisaggregateOptionResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'DisaggregateOption', ParentType, ContextType>;
}>;

export type DisaggregateResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DisaggregateResult'] = ResolversParentTypes['DisaggregateResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'Disaggregate', ParentType, ContextType>;
}>;

export type DistrictResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['District'] = ResolversParentTypes['District']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organisations_in_district?: Resolver<Maybe<Array<ResolversTypes['CatchmentDistrict']>>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['ProvinceResult']>, ParentType, ContextType>;
  province_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  residences?: Resolver<Maybe<Array<ResolversTypes['Residence']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DistrictResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DistrictResult'] = ResolversParentTypes['DistrictResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'District', ParentType, ContextType>;
}>;

export type DistrictUserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DistrictUser'] = ResolversParentTypes['DistrictUser']> = ResolversObject<{
  catchment_district?: Resolver<Maybe<ResolversTypes['CatchmentDistrictResult']>, ParentType, ContextType>;
  catchment_district_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_default_user_district?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organisation_user?: Resolver<Maybe<ResolversTypes['OrganisationUserResult']>, ParentType, ContextType>;
  organisation_user_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['DistrictUserRoleType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DistrictUserResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DistrictUserResult'] = ResolversParentTypes['DistrictUserResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'DistrictUser', ParentType, ContextType>;
}>;

export interface DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Duration'], any> {
  name: 'Duration';
}

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type ErrorFieldResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ErrorField'] = ResolversParentTypes['ErrorField']> = ResolversObject<{
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GUID'], any> {
  name: 'GUID';
}

export interface HslScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSL'], any> {
  name: 'HSL';
}

export interface HslaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSLA'], any> {
  name: 'HSLA';
}

export interface HexColorCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColorCode'], any> {
  name: 'HexColorCode';
}

export interface HexadecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Hexadecimal'], any> {
  name: 'Hexadecimal';
}

export interface IbanScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IBAN'], any> {
  name: 'IBAN';
}

export interface IPv4ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv4'], any> {
  name: 'IPv4';
}

export interface IPv6ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv6'], any> {
  name: 'IPv6';
}

export interface IsbnScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISBN'], any> {
  name: 'ISBN';
}

export interface Iso8601DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601Duration'], any> {
  name: 'ISO8601Duration';
}

export type IndicatorResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Indicator'] = ResolversParentTypes['Indicator']> = ResolversObject<{
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contributing_organisation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  indicator_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  indicator_organisations?: Resolver<Maybe<Array<ResolversTypes['OrganisationIndicator']>>, ParentType, ContextType>;
  indicator_unit?: Resolver<Maybe<ResolversTypes['IndicatorUnitResult']>, ParentType, ContextType>;
  indicator_unit_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  report_template?: Resolver<Maybe<ResolversTypes['ReportTemplateResult']>, ParentType, ContextType>;
  report_template_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['IndicatorType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndicatorDisaggregateResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IndicatorDisaggregate'] = ResolversParentTypes['IndicatorDisaggregate']> = ResolversObject<{
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  disaggregate_option?: Resolver<Maybe<ResolversTypes['DisaggregateOptionResult']>, ParentType, ContextType>;
  disaggregate_option_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  indicator_disaggregate_reports?: Resolver<Maybe<Array<ResolversTypes['IndicatorDisaggregateReport']>>, ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organisation_indicator?: Resolver<Maybe<ResolversTypes['OrganisationIndicatorResult']>, ParentType, ContextType>;
  organisation_indicator_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndicatorDisaggregateReportResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IndicatorDisaggregateReport'] = ResolversParentTypes['IndicatorDisaggregateReport']> = ResolversObject<{
  achieved?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  indicator_disaggregate?: Resolver<Maybe<ResolversTypes['IndicatorDisaggregateResult']>, ParentType, ContextType>;
  indicator_disaggregate_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  report?: Resolver<Maybe<ResolversTypes['ReportResult']>, ParentType, ContextType>;
  report_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndicatorDisaggregateReportResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IndicatorDisaggregateReportResult'] = ResolversParentTypes['IndicatorDisaggregateReportResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'IndicatorDisaggregateReport', ParentType, ContextType>;
}>;

export type IndicatorDisaggregateResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IndicatorDisaggregateResult'] = ResolversParentTypes['IndicatorDisaggregateResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'IndicatorDisaggregate', ParentType, ContextType>;
}>;

export type IndicatorResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IndicatorResult'] = ResolversParentTypes['IndicatorResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'Indicator', ParentType, ContextType>;
}>;

export type IndicatorUnitResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IndicatorUnit'] = ResolversParentTypes['IndicatorUnit']> = ResolversObject<{
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  display_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IndicatorUnitResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['IndicatorUnitResult'] = ResolversParentTypes['IndicatorUnitResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'IndicatorUnit', ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export interface JwtScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JWT'], any> {
  name: 'JWT';
}

export interface LatitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Latitude'], any> {
  name: 'Latitude';
}

export interface LocalDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalDate'], any> {
  name: 'LocalDate';
}

export interface LocalEndTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalEndTime'], any> {
  name: 'LocalEndTime';
}

export interface LocalTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalTime'], any> {
  name: 'LocalTime';
}

export interface LocaleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Locale'], any> {
  name: 'Locale';
}

export type LoginResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['LoginResult'] = ResolversParentTypes['LoginResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiLoginError' | 'LoginSuccess', ParentType, ContextType>;
}>;

export type LoginSuccessResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['LoginSuccess'] = ResolversParentTypes['LoginSuccess']> = ResolversObject<{
  accessToken?: Resolver<ResolversTypes['JWT'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export interface LongitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Longitude'], any> {
  name: 'Longitude';
}

export interface MacScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MAC'], any> {
  name: 'MAC';
}

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createCatchmentDistrict?: Resolver<ResolversTypes['CatchmentDistrictResult'], ParentType, ContextType, RequireFields<MutationCreateCatchmentDistrictArgs, 'input'>>;
  createCatchmentProvince?: Resolver<ResolversTypes['CatchmentProvinceResult'], ParentType, ContextType, RequireFields<MutationCreateCatchmentProvinceArgs, 'input'>>;
  createCountry?: Resolver<ResolversTypes['CountryResult'], ParentType, ContextType, RequireFields<MutationCreateCountryArgs, 'input'>>;
  createDisaggregate?: Resolver<ResolversTypes['DisaggregateResult'], ParentType, ContextType, RequireFields<MutationCreateDisaggregateArgs, 'input'>>;
  createDisaggregateOption?: Resolver<ResolversTypes['DisaggregateOptionResult'], ParentType, ContextType, RequireFields<MutationCreateDisaggregateOptionArgs, 'input'>>;
  createDisaggregateOptions?: Resolver<ResolversTypes['ApiBatchPayloadResult'], ParentType, ContextType, RequireFields<MutationCreateDisaggregateOptionsArgs, 'input'>>;
  createDisaggregateWithOptions?: Resolver<ResolversTypes['DisaggregateResult'], ParentType, ContextType, RequireFields<MutationCreateDisaggregateWithOptionsArgs, 'input'>>;
  createDistrict?: Resolver<ResolversTypes['DistrictResult'], ParentType, ContextType, RequireFields<MutationCreateDistrictArgs, 'input'>>;
  createDistrictUser?: Resolver<ResolversTypes['DistrictUserResult'], ParentType, ContextType, RequireFields<MutationCreateDistrictUserArgs, 'input'>>;
  createIndicator?: Resolver<ResolversTypes['IndicatorResult'], ParentType, ContextType, RequireFields<MutationCreateIndicatorArgs, 'input'>>;
  createIndicatorDisaggregate?: Resolver<ResolversTypes['IndicatorDisaggregateResult'], ParentType, ContextType, RequireFields<MutationCreateIndicatorDisaggregateArgs, 'input'>>;
  createIndicatorDisaggregateReport?: Resolver<ResolversTypes['IndicatorDisaggregateReportResult'], ParentType, ContextType, RequireFields<MutationCreateIndicatorDisaggregateReportArgs, 'input'>>;
  createIndicatorDisaggregates?: Resolver<ResolversTypes['ApiBatchPayloadResult'], ParentType, ContextType, RequireFields<MutationCreateIndicatorDisaggregatesArgs, 'input'>>;
  createIndicatorUnit?: Resolver<ResolversTypes['IndicatorUnitResult'], ParentType, ContextType, RequireFields<MutationCreateIndicatorUnitArgs, 'input'>>;
  createInvitedUser?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<MutationCreateInvitedUserArgs, 'input'>>;
  createOption?: Resolver<ResolversTypes['OptionResult'], ParentType, ContextType, RequireFields<MutationCreateOptionArgs, 'input'>>;
  createOrganisation?: Resolver<ResolversTypes['OrganisationResult'], ParentType, ContextType, RequireFields<MutationCreateOrganisationArgs, 'input'>>;
  createOrganisationIndicator?: Resolver<ResolversTypes['OrganisationIndicatorResult'], ParentType, ContextType, RequireFields<MutationCreateOrganisationIndicatorArgs, 'input'>>;
  createOrganisationIndicators?: Resolver<ResolversTypes['CreateOrganisationIndicatorsResult'], ParentType, ContextType, RequireFields<MutationCreateOrganisationIndicatorsArgs, 'input'>>;
  createOrganisationReportTemplate?: Resolver<ResolversTypes['OrganisationReportTemplateResult'], ParentType, ContextType, RequireFields<MutationCreateOrganisationReportTemplateArgs, 'input'>>;
  createOrganisationReportTemplates?: Resolver<ResolversTypes['ApiBatchPayloadResult'], ParentType, ContextType, RequireFields<MutationCreateOrganisationReportTemplatesArgs, 'input'>>;
  createOrganisationUser?: Resolver<ResolversTypes['OrganisationUserResult'], ParentType, ContextType, RequireFields<MutationCreateOrganisationUserArgs, 'input'>>;
  createProvince?: Resolver<ResolversTypes['ProvinceResult'], ParentType, ContextType, RequireFields<MutationCreateProvinceArgs, 'input'>>;
  createReport?: Resolver<ResolversTypes['ReportResult'], ParentType, ContextType, RequireFields<MutationCreateReportArgs, 'input'>>;
  createReportTemplate?: Resolver<ResolversTypes['ReportTemplateResult'], ParentType, ContextType, RequireFields<MutationCreateReportTemplateArgs, 'input'>>;
  createResidence?: Resolver<ResolversTypes['ResidenceResult'], ParentType, ContextType, RequireFields<MutationCreateResidenceArgs, 'input'>>;
  createServiceArea?: Resolver<ResolversTypes['ServiceAreaResult'], ParentType, ContextType, RequireFields<MutationCreateServiceAreaArgs, 'input'>>;
  createServiceAreaSewerConnection?: Resolver<ResolversTypes['ServiceAreaSewerConnectionResult'], ParentType, ContextType, RequireFields<MutationCreateServiceAreaSewerConnectionArgs, 'input'>>;
  createServiceAreaWaterConnection?: Resolver<ResolversTypes['ServiceAreaWaterConnectionResult'], ParentType, ContextType, RequireFields<MutationCreateServiceAreaWaterConnectionArgs, 'input'>>;
  createSewerNetwork?: Resolver<ResolversTypes['SewerNetworkResult'], ParentType, ContextType, RequireFields<MutationCreateSewerNetworkArgs, 'input'>>;
  createSewerTreatmentPlant?: Resolver<ResolversTypes['SewerTreatmentPlantResult'], ParentType, ContextType, RequireFields<MutationCreateSewerTreatmentPlantArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  createUserInvitation?: Resolver<ResolversTypes['UserInvitationResult'], ParentType, ContextType, RequireFields<MutationCreateUserInvitationArgs, 'input'>>;
  createWaterNetwork?: Resolver<ResolversTypes['WaterNetworkResult'], ParentType, ContextType, RequireFields<MutationCreateWaterNetworkArgs, 'input'>>;
  createWaterProductionSite?: Resolver<Maybe<ResolversTypes['CreateWaterProductionSitePayload']>, ParentType, ContextType, RequireFields<MutationCreateWaterProductionSiteArgs, 'input'>>;
  createWaterStorageTank?: Resolver<Maybe<ResolversTypes['CreateWaterStorageTankPayload']>, ParentType, ContextType, RequireFields<MutationCreateWaterStorageTankArgs, 'input'>>;
  createWaterTreatmentPlant?: Resolver<ResolversTypes['WaterTreatmentPlantResult'], ParentType, ContextType, RequireFields<MutationCreateWaterTreatmentPlantArgs, 'input'>>;
  deleteCatchmentDistrict?: Resolver<ResolversTypes['CatchmentDistrictResult'], ParentType, ContextType, RequireFields<MutationDeleteCatchmentDistrictArgs, 'input'>>;
  deleteCatchmentProvince?: Resolver<ResolversTypes['CatchmentProvinceResult'], ParentType, ContextType, RequireFields<MutationDeleteCatchmentProvinceArgs, 'input'>>;
  deleteCountry?: Resolver<ResolversTypes['CountryResult'], ParentType, ContextType, RequireFields<MutationDeleteCountryArgs, 'input'>>;
  deleteDisaggregate?: Resolver<ResolversTypes['DisaggregateResult'], ParentType, ContextType, RequireFields<MutationDeleteDisaggregateArgs, 'input'>>;
  deleteDisaggregateOption?: Resolver<ResolversTypes['DisaggregateOptionResult'], ParentType, ContextType, RequireFields<MutationDeleteDisaggregateOptionArgs, 'input'>>;
  deleteDistrict?: Resolver<ResolversTypes['DistrictResult'], ParentType, ContextType, RequireFields<MutationDeleteDistrictArgs, 'input'>>;
  deleteDistrictUser?: Resolver<ResolversTypes['DistrictUserResult'], ParentType, ContextType, RequireFields<MutationDeleteDistrictUserArgs, 'input'>>;
  deleteIndicator?: Resolver<ResolversTypes['IndicatorResult'], ParentType, ContextType, RequireFields<MutationDeleteIndicatorArgs, 'input'>>;
  deleteIndicatorDisaggregate?: Resolver<ResolversTypes['IndicatorDisaggregateResult'], ParentType, ContextType, RequireFields<MutationDeleteIndicatorDisaggregateArgs, 'input'>>;
  deleteIndicatorDisaggregateReport?: Resolver<ResolversTypes['IndicatorDisaggregateReportResult'], ParentType, ContextType, RequireFields<MutationDeleteIndicatorDisaggregateReportArgs, 'input'>>;
  deleteIndicatorUnit?: Resolver<ResolversTypes['IndicatorUnitResult'], ParentType, ContextType, RequireFields<MutationDeleteIndicatorUnitArgs, 'input'>>;
  deleteOption?: Resolver<ResolversTypes['OptionResult'], ParentType, ContextType, RequireFields<MutationDeleteOptionArgs, 'input'>>;
  deleteOrganisation?: Resolver<ResolversTypes['OrganisationResult'], ParentType, ContextType, RequireFields<MutationDeleteOrganisationArgs, 'input'>>;
  deleteOrganisationIndicator?: Resolver<ResolversTypes['OrganisationIndicatorResult'], ParentType, ContextType, RequireFields<MutationDeleteOrganisationIndicatorArgs, 'input'>>;
  deleteOrganisationReportTemplate?: Resolver<ResolversTypes['OrganisationReportTemplateResult'], ParentType, ContextType, RequireFields<MutationDeleteOrganisationReportTemplateArgs, 'input'>>;
  deleteOrganisationUser?: Resolver<ResolversTypes['OrganisationUserResult'], ParentType, ContextType, RequireFields<MutationDeleteOrganisationUserArgs, 'input'>>;
  deleteProvince?: Resolver<ResolversTypes['ProvinceResult'], ParentType, ContextType, RequireFields<MutationDeleteProvinceArgs, 'input'>>;
  deleteReport?: Resolver<ResolversTypes['ReportResult'], ParentType, ContextType, RequireFields<MutationDeleteReportArgs, 'input'>>;
  deleteReportTemplate?: Resolver<ResolversTypes['ReportTemplateResult'], ParentType, ContextType, RequireFields<MutationDeleteReportTemplateArgs, 'input'>>;
  deleteResidence?: Resolver<ResolversTypes['ResidenceResult'], ParentType, ContextType, RequireFields<MutationDeleteResidenceArgs, 'input'>>;
  deleteServiceArea?: Resolver<ResolversTypes['ServiceAreaResult'], ParentType, ContextType, RequireFields<MutationDeleteServiceAreaArgs, 'input'>>;
  deleteServiceAreaSewerConnection?: Resolver<ResolversTypes['ServiceAreaSewerConnectionResult'], ParentType, ContextType, RequireFields<MutationDeleteServiceAreaSewerConnectionArgs, 'input'>>;
  deleteServiceAreaWaterConnection?: Resolver<ResolversTypes['ServiceAreaWaterConnectionResult'], ParentType, ContextType, RequireFields<MutationDeleteServiceAreaWaterConnectionArgs, 'input'>>;
  deleteSewerNetwork?: Resolver<ResolversTypes['SewerNetworkResult'], ParentType, ContextType, RequireFields<MutationDeleteSewerNetworkArgs, 'id'>>;
  deleteSewerTreatmentPlants?: Resolver<ResolversTypes['ApiBatchPayloadResult'], ParentType, ContextType, RequireFields<MutationDeleteSewerTreatmentPlantsArgs, 'filter'>>;
  deleteUser?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'input'>>;
  deleteUserInvitation?: Resolver<ResolversTypes['UserInvitationResult'], ParentType, ContextType, RequireFields<MutationDeleteUserInvitationArgs, 'input'>>;
  deleteWaterNetwork?: Resolver<ResolversTypes['WaterNetworkResult'], ParentType, ContextType, RequireFields<MutationDeleteWaterNetworkArgs, 'id'>>;
  deleteWaterProductionSite?: Resolver<Maybe<ResolversTypes['DeleteWaterProductionSitePayload']>, ParentType, ContextType, RequireFields<MutationDeleteWaterProductionSiteArgs, 'input'>>;
  deleteWaterStorageTank?: Resolver<Maybe<ResolversTypes['DeleteWaterStorageTankPayload']>, ParentType, ContextType, RequireFields<MutationDeleteWaterStorageTankArgs, 'input'>>;
  deleteWaterTreatmentPlants?: Resolver<ResolversTypes['ApiBatchPayloadResult'], ParentType, ContextType, RequireFields<MutationDeleteWaterTreatmentPlantsArgs, 'filter'>>;
  disableUser?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<MutationDisableUserArgs, 'input'>>;
  login?: Resolver<ResolversTypes['LoginResult'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  requestPasswordReset?: Resolver<ResolversTypes['PasswordResetRequestResult'], ParentType, ContextType, RequireFields<MutationRequestPasswordResetArgs, 'input'>>;
  resetPassword?: Resolver<ResolversTypes['PasswordResetResult'], ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'input'>>;
  setUserDefaultDistrict?: Resolver<ResolversTypes['DistrictUserResult'], ParentType, ContextType, RequireFields<MutationSetUserDefaultDistrictArgs, 'input'>>;
  setUserDefaultProject?: Resolver<ResolversTypes['OrganisationUserResult'], ParentType, ContextType, RequireFields<MutationSetUserDefaultProjectArgs, 'organisation_user_id'>>;
  updateCatchmentDistrict?: Resolver<ResolversTypes['CatchmentDistrictResult'], ParentType, ContextType, RequireFields<MutationUpdateCatchmentDistrictArgs, 'input'>>;
  updateCatchmentProvince?: Resolver<ResolversTypes['CatchmentProvinceResult'], ParentType, ContextType, RequireFields<MutationUpdateCatchmentProvinceArgs, 'input'>>;
  updateCountry?: Resolver<ResolversTypes['CountryResult'], ParentType, ContextType, RequireFields<MutationUpdateCountryArgs, 'input'>>;
  updateDisaggregate?: Resolver<ResolversTypes['DisaggregateResult'], ParentType, ContextType, RequireFields<MutationUpdateDisaggregateArgs, 'input'>>;
  updateDistrict?: Resolver<ResolversTypes['DistrictResult'], ParentType, ContextType, RequireFields<MutationUpdateDistrictArgs, 'input'>>;
  updateIndicator?: Resolver<ResolversTypes['IndicatorResult'], ParentType, ContextType, RequireFields<MutationUpdateIndicatorArgs, 'input'>>;
  updateIndicatorDisaggregateReport?: Resolver<ResolversTypes['IndicatorDisaggregateReportResult'], ParentType, ContextType, RequireFields<MutationUpdateIndicatorDisaggregateReportArgs, 'input'>>;
  updateIndicatorUnit?: Resolver<ResolversTypes['IndicatorUnitResult'], ParentType, ContextType, RequireFields<MutationUpdateIndicatorUnitArgs, 'input'>>;
  updateOption?: Resolver<ResolversTypes['OptionResult'], ParentType, ContextType, RequireFields<MutationUpdateOptionArgs, 'input'>>;
  updateOrganisation?: Resolver<ResolversTypes['OrganisationResult'], ParentType, ContextType, RequireFields<MutationUpdateOrganisationArgs, 'input'>>;
  updateOrganisationUser?: Resolver<ResolversTypes['OrganisationUserResult'], ParentType, ContextType, RequireFields<MutationUpdateOrganisationUserArgs, 'input'>>;
  updateProvince?: Resolver<ResolversTypes['ProvinceResult'], ParentType, ContextType, RequireFields<MutationUpdateProvinceArgs, 'input'>>;
  updateReport?: Resolver<ResolversTypes['ReportResult'], ParentType, ContextType, RequireFields<MutationUpdateReportArgs, 'input'>>;
  updateReportTemplate?: Resolver<ResolversTypes['ReportTemplateResult'], ParentType, ContextType, RequireFields<MutationUpdateReportTemplateArgs, 'input'>>;
  updateResidence?: Resolver<ResolversTypes['ResidenceResult'], ParentType, ContextType, RequireFields<MutationUpdateResidenceArgs, 'input'>>;
  updateServiceAreaSewerConnection?: Resolver<ResolversTypes['ServiceAreaSewerConnectionResult'], ParentType, ContextType, RequireFields<MutationUpdateServiceAreaSewerConnectionArgs, 'input'>>;
  updateServiceAreaWaterConnection?: Resolver<ResolversTypes['ServiceAreaWaterConnectionResult'], ParentType, ContextType, RequireFields<MutationUpdateServiceAreaWaterConnectionArgs, 'input'>>;
  updateSewerNetwork?: Resolver<ResolversTypes['SewerNetworkResult'], ParentType, ContextType, RequireFields<MutationUpdateSewerNetworkArgs, 'input'>>;
  updateSewerTreatmentPlant?: Resolver<ResolversTypes['SewerTreatmentPlantResult'], ParentType, ContextType, RequireFields<MutationUpdateSewerTreatmentPlantArgs, 'input'>>;
  updateUser?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
  updateUserRolesForDistrict?: Resolver<ResolversTypes['DistrictUserResult'], ParentType, ContextType, RequireFields<MutationUpdateUserRolesForDistrictArgs, 'input'>>;
  updateWaterNetwork?: Resolver<ResolversTypes['WaterNetworkResult'], ParentType, ContextType, RequireFields<MutationUpdateWaterNetworkArgs, 'input'>>;
  updateWaterProductionSite?: Resolver<Maybe<ResolversTypes['UpdateWaterProductionSitePayload']>, ParentType, ContextType, RequireFields<MutationUpdateWaterProductionSiteArgs, 'input'>>;
  updateWaterStorageTank?: Resolver<Maybe<ResolversTypes['UpdateWaterStorageTankPayload']>, ParentType, ContextType, RequireFields<MutationUpdateWaterStorageTankArgs, 'input'>>;
  updateWaterTreatmentPlant?: Resolver<ResolversTypes['WaterTreatmentPlantResult'], ParentType, ContextType, RequireFields<MutationUpdateWaterTreatmentPlantArgs, 'input'>>;
}>;

export interface NegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeFloat'], any> {
  name: 'NegativeFloat';
}

export interface NegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeInt'], any> {
  name: 'NegativeInt';
}

export interface NonEmptyStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
  name: 'NonEmptyString';
}

export interface NonNegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeFloat'], any> {
  name: 'NonNegativeFloat';
}

export interface NonNegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeInt'], any> {
  name: 'NonNegativeInt';
}

export interface NonPositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveFloat'], any> {
  name: 'NonPositiveFloat';
}

export interface NonPositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveInt'], any> {
  name: 'NonPositiveInt';
}

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export type OptionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Option'] = ResolversParentTypes['Option']> = ResolversObject<{
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  disaggregate_options?: Resolver<Maybe<Array<ResolversTypes['DisaggregateOption']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  option_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OptionResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OptionResult'] = ResolversParentTypes['OptionResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'Option', ParentType, ContextType>;
}>;

export type OrganisationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Organisation'] = ResolversParentTypes['Organisation']> = ResolversObject<{
  allow_master_support?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  catchment_provinces?: Resolver<Maybe<Array<ResolversTypes['CatchmentProvince']>>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['CountryResult']>, ParentType, ContextType>;
  country_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organisation_indicators?: Resolver<Maybe<Array<ResolversTypes['OrganisationIndicator']>>, ParentType, ContextType>;
  organisation_report_templates?: Resolver<Maybe<Array<ResolversTypes['OrganisationReportTemplate']>>, ParentType, ContextType>;
  reports?: Resolver<Maybe<Array<ResolversTypes['Report']>>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<ResolversTypes['OrganisationUser']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrganisationIndicatorResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OrganisationIndicator'] = ResolversParentTypes['OrganisationIndicator']> = ResolversObject<{
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  indicator?: Resolver<Maybe<ResolversTypes['IndicatorResult']>, ParentType, ContextType>;
  indicator_disaggregates?: Resolver<Maybe<Array<ResolversTypes['IndicatorDisaggregate']>>, ParentType, ContextType>;
  indicator_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organisation?: Resolver<Maybe<ResolversTypes['OrganisationResult']>, ParentType, ContextType>;
  organisation_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrganisationIndicatorResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OrganisationIndicatorResult'] = ResolversParentTypes['OrganisationIndicatorResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'OrganisationIndicator', ParentType, ContextType>;
}>;

export type OrganisationReportTemplateResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OrganisationReportTemplate'] = ResolversParentTypes['OrganisationReportTemplate']> = ResolversObject<{
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organisation?: Resolver<Maybe<ResolversTypes['OrganisationResult']>, ParentType, ContextType>;
  organisation_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  report_template?: Resolver<Maybe<ResolversTypes['ReportTemplateResult']>, ParentType, ContextType>;
  report_template_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reports?: Resolver<Maybe<Array<ResolversTypes['Report']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrganisationReportTemplateResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OrganisationReportTemplateResult'] = ResolversParentTypes['OrganisationReportTemplateResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'OrganisationReportTemplate', ParentType, ContextType>;
}>;

export type OrganisationResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OrganisationResult'] = ResolversParentTypes['OrganisationResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'Organisation', ParentType, ContextType>;
}>;

export type OrganisationUserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OrganisationUser'] = ResolversParentTypes['OrganisationUser']> = ResolversObject<{
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  default_district?: Resolver<Maybe<ResolversTypes['DistrictResult']>, ParentType, ContextType>;
  district_roles?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_default_organisation?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organisation?: Resolver<Maybe<ResolversTypes['OrganisationResult']>, ParentType, ContextType>;
  organisation_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['OrganisationUserRoleType'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserResult']>, ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrganisationUserResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OrganisationUserResult'] = ResolversParentTypes['OrganisationUserResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'OrganisationUser', ParentType, ContextType>;
}>;

export type PasswordResetRequestPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PasswordResetRequestPayload'] = ResolversParentTypes['PasswordResetRequestPayload']> = ResolversObject<{
  hashed_password_reset_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PasswordResetRequestResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PasswordResetRequestResult'] = ResolversParentTypes['PasswordResetRequestResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiPasswordResetError' | 'PasswordResetRequestPayload', ParentType, ContextType>;
}>;

export type PasswordResetResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PasswordResetResult'] = ResolversParentTypes['PasswordResetResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiPasswordResetError' | 'User', ParentType, ContextType>;
}>;

export interface PhoneNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PhoneNumber'], any> {
  name: 'PhoneNumber';
}

export interface PortScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Port'], any> {
  name: 'Port';
}

export interface PositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveFloat'], any> {
  name: 'PositiveFloat';
}

export interface PositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveInt'], any> {
  name: 'PositiveInt';
}

export interface PostalCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PostalCode'], any> {
  name: 'PostalCode';
}

export type ProvinceResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Province'] = ResolversParentTypes['Province']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['CountryResult']>, ParentType, ContextType>;
  country_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  districts?: Resolver<Maybe<Array<ResolversTypes['District']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProvinceResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ProvinceResult'] = ResolversParentTypes['ProvinceResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'Province', ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  catchment_district?: Resolver<ResolversTypes['CatchmentDistrictResult'], ParentType, ContextType, RequireFields<QueryCatchment_DistrictArgs, 'catchment_district_id'>>;
  catchment_districts?: Resolver<Maybe<Array<ResolversTypes['CatchmentDistrict']>>, ParentType, ContextType, RequireFields<QueryCatchment_DistrictsArgs, 'catchment_province_id'>>;
  catchment_province?: Resolver<ResolversTypes['CatchmentProvinceResult'], ParentType, ContextType, RequireFields<QueryCatchment_ProvinceArgs, 'catchment_province_id'>>;
  catchment_provinces?: Resolver<Maybe<Array<ResolversTypes['CatchmentProvince']>>, ParentType, ContextType, RequireFields<QueryCatchment_ProvincesArgs, 'organisation_id'>>;
  countries?: Resolver<Maybe<Array<ResolversTypes['Country']>>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['CountryResult'], ParentType, ContextType, RequireFields<QueryCountryArgs, 'id'>>;
  default_user_district?: Resolver<ResolversTypes['DistrictResult'], ParentType, ContextType, RequireFields<QueryDefault_User_DistrictArgs, 'organisation_user_id' | 'user_id'>>;
  default_user_organisation?: Resolver<ResolversTypes['OrganisationResult'], ParentType, ContextType, RequireFields<QueryDefault_User_OrganisationArgs, 'user_id'>>;
  disaggregate?: Resolver<ResolversTypes['DisaggregateResult'], ParentType, ContextType, RequireFields<QueryDisaggregateArgs, 'id'>>;
  disaggregate_option?: Resolver<ResolversTypes['DisaggregateOptionResult'], ParentType, ContextType, RequireFields<QueryDisaggregate_OptionArgs, 'id'>>;
  disaggregate_options?: Resolver<Maybe<Array<ResolversTypes['DisaggregateOption']>>, ParentType, ContextType>;
  disaggregates?: Resolver<Maybe<Array<ResolversTypes['Disaggregate']>>, ParentType, ContextType>;
  district?: Resolver<ResolversTypes['DistrictResult'], ParentType, ContextType, RequireFields<QueryDistrictArgs, 'id'>>;
  district_user?: Resolver<ResolversTypes['DistrictUserResult'], ParentType, ContextType, RequireFields<QueryDistrict_UserArgs, 'district_user_id'>>;
  district_users?: Resolver<Maybe<Array<ResolversTypes['DistrictUser']>>, ParentType, ContextType, RequireFields<QueryDistrict_UsersArgs, 'catchment_district_id'>>;
  districts?: Resolver<Maybe<Array<ResolversTypes['District']>>, ParentType, ContextType, RequireFields<QueryDistrictsArgs, 'province_id'>>;
  indicator?: Resolver<ResolversTypes['IndicatorResult'], ParentType, ContextType, RequireFields<QueryIndicatorArgs, 'id'>>;
  indicator_disaggregate?: Resolver<ResolversTypes['IndicatorDisaggregateResult'], ParentType, ContextType, RequireFields<QueryIndicator_DisaggregateArgs, 'id'>>;
  indicator_disaggregate_report?: Resolver<ResolversTypes['IndicatorDisaggregateReportResult'], ParentType, ContextType, RequireFields<QueryIndicator_Disaggregate_ReportArgs, 'id'>>;
  indicator_disaggregate_reports?: Resolver<Maybe<Array<ResolversTypes['IndicatorDisaggregateReport']>>, ParentType, ContextType, RequireFields<QueryIndicator_Disaggregate_ReportsArgs, 'report_id'>>;
  indicator_disaggregates?: Resolver<Maybe<Array<ResolversTypes['IndicatorDisaggregate']>>, ParentType, ContextType, RequireFields<QueryIndicator_DisaggregatesArgs, 'organisation_indicator_id'>>;
  indicator_unit?: Resolver<ResolversTypes['IndicatorUnitResult'], ParentType, ContextType, RequireFields<QueryIndicator_UnitArgs, 'id'>>;
  indicator_units?: Resolver<Maybe<Array<ResolversTypes['IndicatorUnit']>>, ParentType, ContextType>;
  indicators?: Resolver<Maybe<Array<ResolversTypes['Indicator']>>, ParentType, ContextType>;
  me?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType>;
  option?: Resolver<ResolversTypes['OptionResult'], ParentType, ContextType, RequireFields<QueryOptionArgs, 'id'>>;
  options?: Resolver<Maybe<Array<ResolversTypes['Option']>>, ParentType, ContextType>;
  organisation?: Resolver<Maybe<ResolversTypes['OrganisationResult']>, ParentType, ContextType, RequireFields<QueryOrganisationArgs, 'id'>>;
  organisation_indicator?: Resolver<ResolversTypes['OrganisationIndicatorResult'], ParentType, ContextType, RequireFields<QueryOrganisation_IndicatorArgs, 'id'>>;
  organisation_indicators?: Resolver<Maybe<Array<ResolversTypes['OrganisationIndicator']>>, ParentType, ContextType, RequireFields<QueryOrganisation_IndicatorsArgs, 'organisation_id'>>;
  organisation_report_template?: Resolver<ResolversTypes['OrganisationReportTemplateResult'], ParentType, ContextType, RequireFields<QueryOrganisation_Report_TemplateArgs, 'id'>>;
  organisation_report_templates?: Resolver<Maybe<Array<ResolversTypes['OrganisationReportTemplate']>>, ParentType, ContextType, RequireFields<QueryOrganisation_Report_TemplatesArgs, 'organisation_id'>>;
  organisation_reports?: Resolver<Maybe<Array<ResolversTypes['Report']>>, ParentType, ContextType, RequireFields<QueryOrganisation_ReportsArgs, 'organisation_id'>>;
  organisation_user?: Resolver<ResolversTypes['OrganisationUserResult'], ParentType, ContextType, RequireFields<QueryOrganisation_UserArgs, 'organisation_user_id'>>;
  organisation_users?: Resolver<Maybe<Array<ResolversTypes['OrganisationUser']>>, ParentType, ContextType, RequireFields<QueryOrganisation_UsersArgs, 'organisation_id'>>;
  organisations?: Resolver<Maybe<Array<ResolversTypes['Organisation']>>, ParentType, ContextType, RequireFields<QueryOrganisationsArgs, 'country_id'>>;
  province?: Resolver<ResolversTypes['ProvinceResult'], ParentType, ContextType, RequireFields<QueryProvinceArgs, 'id'>>;
  provinces?: Resolver<Maybe<Array<ResolversTypes['Province']>>, ParentType, ContextType, RequireFields<QueryProvincesArgs, 'country_id'>>;
  report?: Resolver<ResolversTypes['ReportResult'], ParentType, ContextType, RequireFields<QueryReportArgs, 'id'>>;
  report_template?: Resolver<ResolversTypes['ReportTemplateResult'], ParentType, ContextType, RequireFields<QueryReport_TemplateArgs, 'id'>>;
  report_templates?: Resolver<Maybe<Array<ResolversTypes['ReportTemplate']>>, ParentType, ContextType>;
  reports?: Resolver<Maybe<Array<ResolversTypes['Report']>>, ParentType, ContextType>;
  residence?: Resolver<ResolversTypes['ResidenceResult'], ParentType, ContextType, RequireFields<QueryResidenceArgs, 'id'>>;
  residences?: Resolver<Maybe<Array<ResolversTypes['Residence']>>, ParentType, ContextType, RequireFields<QueryResidencesArgs, 'district_id'>>;
  service_area?: Resolver<ResolversTypes['ServiceAreaResult'], ParentType, ContextType, RequireFields<QueryService_AreaArgs, 'id'>>;
  service_area_sewer_connection?: Resolver<ResolversTypes['ServiceAreaSewerConnectionResult'], ParentType, ContextType, RequireFields<QueryService_Area_Sewer_ConnectionArgs, 'service_area_id' | 'sewer_netowrk_id'>>;
  service_area_sewer_connections?: Resolver<Maybe<Array<ResolversTypes['ServiceAreaSewerConnection']>>, ParentType, ContextType, RequireFields<QueryService_Area_Sewer_ConnectionsArgs, 'service_area_id'>>;
  service_area_water_connection?: Resolver<ResolversTypes['ServiceAreaWaterConnectionResult'], ParentType, ContextType, RequireFields<QueryService_Area_Water_ConnectionArgs, 'service_area_id' | 'water_netowrk_id'>>;
  service_area_water_connections?: Resolver<Maybe<Array<ResolversTypes['ServiceAreaWaterConnection']>>, ParentType, ContextType, RequireFields<QueryService_Area_Water_ConnectionsArgs, 'service_area_id'>>;
  service_areas?: Resolver<Maybe<Array<ResolversTypes['ServiceArea']>>, ParentType, ContextType, RequireFields<QueryService_AreasArgs, 'catchment_district_id'>>;
  sewer_network?: Resolver<ResolversTypes['SewerNetworkResult'], ParentType, ContextType, RequireFields<QuerySewer_NetworkArgs, 'id'>>;
  sewer_networks?: Resolver<Maybe<Array<ResolversTypes['SewerNetwork']>>, ParentType, ContextType, RequireFields<QuerySewer_NetworksArgs, 'plant_id'>>;
  sewer_treatment_plant?: Resolver<ResolversTypes['SewerTreatmentPlantResult'], ParentType, ContextType, RequireFields<QuerySewer_Treatment_PlantArgs, 'id'>>;
  sewer_treatment_plants?: Resolver<Maybe<Array<ResolversTypes['SewerTreatmentPlant']>>, ParentType, ContextType, RequireFields<QuerySewer_Treatment_PlantsArgs, 'catchment_district_id'>>;
  user?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  user_invitation?: Resolver<ResolversTypes['UserInvitationResult'], ParentType, ContextType, RequireFields<QueryUser_InvitationArgs, 'id'>>;
  user_invitations?: Resolver<Maybe<Array<ResolversTypes['UserInvitation']>>, ParentType, ContextType, RequireFields<QueryUser_InvitationsArgs, 'args'>>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  water_network?: Resolver<ResolversTypes['WaterNetworkResult'], ParentType, ContextType, RequireFields<QueryWater_NetworkArgs, 'id'>>;
  water_networks?: Resolver<Maybe<Array<ResolversTypes['WaterNetwork']>>, ParentType, ContextType, RequireFields<QueryWater_NetworksArgs, 'plant_id'>>;
  water_production_site?: Resolver<Maybe<ResolversTypes['WaterProductionSite']>, ParentType, ContextType, RequireFields<QueryWater_Production_SiteArgs, 'id'>>;
  water_production_sites?: Resolver<Maybe<Array<ResolversTypes['WaterProductionSite']>>, ParentType, ContextType, RequireFields<QueryWater_Production_SitesArgs, 'plant_id'>>;
  water_storage_tank?: Resolver<ResolversTypes['WaterStorageTank'], ParentType, ContextType, RequireFields<QueryWater_Storage_TankArgs, 'id'>>;
  water_storage_tanks?: Resolver<Maybe<Array<ResolversTypes['WaterStorageTank']>>, ParentType, ContextType, RequireFields<QueryWater_Storage_TanksArgs, 'plant_id'>>;
  water_treatment_plant?: Resolver<ResolversTypes['WaterTreatmentPlantResult'], ParentType, ContextType, RequireFields<QueryWater_Treatment_PlantArgs, 'id'>>;
  water_treatment_plants?: Resolver<Maybe<Array<ResolversTypes['WaterTreatmentPlant']>>, ParentType, ContextType, RequireFields<QueryWater_Treatment_PlantsArgs, 'catchment_district_id'>>;
}>;

export interface RgbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGB'], any> {
  name: 'RGB';
}

export interface RgbaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBA'], any> {
  name: 'RGBA';
}

export type ReportResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Report'] = ResolversParentTypes['Report']> = ResolversObject<{
  catchment_district?: Resolver<Maybe<ResolversTypes['CatchmentDistrictResult']>, ParentType, ContextType>;
  catchment_district_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  indicator_disaggregate_reports?: Resolver<Maybe<Array<ResolversTypes['IndicatorDisaggregateReport']>>, ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organisation_report_template?: Resolver<Maybe<ResolversTypes['OrganisationReportTemplateResult']>, ParentType, ContextType>;
  organisation_report_template_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  report_due_date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  reporting_date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  reporting_period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reporting_period_end_date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  reporting_period_start_date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReportResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ReportResult'] = ResolversParentTypes['ReportResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'Report', ParentType, ContextType>;
}>;

export type ReportTemplateResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ReportTemplate'] = ResolversParentTypes['ReportTemplate']> = ResolversObject<{
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  frequency?: Resolver<ResolversTypes['ReportingFrequency'], ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  indicators?: Resolver<Maybe<Array<ResolversTypes['Indicator']>>, ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organisation_report_templates?: Resolver<Maybe<Array<ResolversTypes['OrganisationReportTemplate']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['IndicatorType'], ParentType, ContextType>;
  window?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReportTemplateResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ReportTemplateResult'] = ResolversParentTypes['ReportTemplateResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'ReportTemplate', ParentType, ContextType>;
}>;

export type ResidenceResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Residence'] = ResolversParentTypes['Residence']> = ResolversObject<{
  cost_classification?: Resolver<ResolversTypes['ResidenceClassification'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  district?: Resolver<Maybe<ResolversTypes['DistrictResult']>, ParentType, ContextType>;
  district_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  service_areas?: Resolver<Maybe<Array<ResolversTypes['ServiceArea']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResidenceResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ResidenceResult'] = ResolversParentTypes['ResidenceResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'Residence', ParentType, ContextType>;
}>;

export interface RoutingNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RoutingNumber'], any> {
  name: 'RoutingNumber';
}

export interface SafeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SafeInt'], any> {
  name: 'SafeInt';
}

export type ServiceAreaResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ServiceArea'] = ResolversParentTypes['ServiceArea']> = ResolversObject<{
  catchment_district?: Resolver<ResolversTypes['CatchmentDistrictResult'], ParentType, ContextType>;
  catchment_district_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  residence?: Resolver<Maybe<ResolversTypes['ResidenceResult']>, ParentType, ContextType>;
  residence_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  service_area_sewer_connections?: Resolver<Maybe<Array<ResolversTypes['ServiceAreaSewerConnection']>>, ParentType, ContextType>;
  service_area_water_connections?: Resolver<Maybe<Array<ResolversTypes['ServiceAreaWaterConnection']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceAreaResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ServiceAreaResult'] = ResolversParentTypes['ServiceAreaResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'ServiceArea', ParentType, ContextType>;
}>;

export type ServiceAreaSewerConnectionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ServiceAreaSewerConnection'] = ResolversParentTypes['ServiceAreaSewerConnection']> = ResolversObject<{
  connections?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  service_area?: Resolver<Maybe<ResolversTypes['ServiceAreaResult']>, ParentType, ContextType>;
  service_area_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sewer_netowrk_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sewer_network?: Resolver<Maybe<ResolversTypes['SewerNetworkResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceAreaSewerConnectionResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ServiceAreaSewerConnectionResult'] = ResolversParentTypes['ServiceAreaSewerConnectionResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'ServiceAreaSewerConnection', ParentType, ContextType>;
}>;

export type ServiceAreaWaterConnectionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ServiceAreaWaterConnection'] = ResolversParentTypes['ServiceAreaWaterConnection']> = ResolversObject<{
  connections?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  service_area?: Resolver<Maybe<ResolversTypes['ServiceAreaResult']>, ParentType, ContextType>;
  service_area_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  water_netowrk_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  water_network?: Resolver<Maybe<ResolversTypes['WaterNetworkResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceAreaWaterConnectionResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ServiceAreaWaterConnectionResult'] = ResolversParentTypes['ServiceAreaWaterConnectionResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'ServiceAreaWaterConnection', ParentType, ContextType>;
}>;

export type SewerNetworkResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['SewerNetwork'] = ResolversParentTypes['SewerNetwork']> = ResolversObject<{
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plant_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sewer_network_sewer_connections?: Resolver<Maybe<Array<ResolversTypes['ServiceAreaSewerConnection']>>, ParentType, ContextType>;
  sewer_treatment_plant?: Resolver<Maybe<ResolversTypes['SewerTreatmentPlantResult']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['NetworkOwnershipType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SewerNetworkResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['SewerNetworkResult'] = ResolversParentTypes['SewerNetworkResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'SewerNetwork', ParentType, ContextType>;
}>;

export type SewerTreatmentPlantResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['SewerTreatmentPlant'] = ResolversParentTypes['SewerTreatmentPlant']> = ResolversObject<{
  capacity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  catchment_district?: Resolver<Maybe<ResolversTypes['CatchmentDistrictResult']>, ParentType, ContextType>;
  catchment_district_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gps?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ponds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sewer_network?: Resolver<Maybe<ResolversTypes['SewerNetworkResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SewerTreatmentPlantResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['SewerTreatmentPlantResult'] = ResolversParentTypes['SewerTreatmentPlantResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'SewerTreatmentPlant', ParentType, ContextType>;
}>;

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface TimeZoneScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TimeZone'], any> {
  name: 'TimeZone';
}

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export interface UsCurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['USCurrency'], any> {
  name: 'USCurrency';
}

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export interface UnsignedFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedFloat'], any> {
  name: 'UnsignedFloat';
}

export interface UnsignedIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedInt'], any> {
  name: 'UnsignedInt';
}

export type UpdateSewerTreatmentPlantPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UpdateSewerTreatmentPlantPayload'] = ResolversParentTypes['UpdateSewerTreatmentPlantPayload']> = ResolversObject<{
  sewer_treatment_plant?: Resolver<ResolversTypes['SewerTreatmentPlant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateWaterProductionSitePayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UpdateWaterProductionSitePayload'] = ResolversParentTypes['UpdateWaterProductionSitePayload']> = ResolversObject<{
  water_production_site?: Resolver<ResolversTypes['WaterProductionSite'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateWaterStorageTankPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UpdateWaterStorageTankPayload'] = ResolversParentTypes['UpdateWaterStorageTankPayload']> = ResolversObject<{
  water_storage_tank?: Resolver<ResolversTypes['WaterStorageTank'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdateWaterTreatmentPlantPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UpdateWaterTreatmentPlantPayload'] = ResolversParentTypes['UpdateWaterTreatmentPlantPayload']> = ResolversObject<{
  water_treatment_plant?: Resolver<ResolversTypes['WaterTreatmentPlant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  confirmed_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  disabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hashed_confirmation_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hashed_password_reset_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_login?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  master_support?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  theme?: Resolver<Maybe<ResolversTypes['UserTheme']>, ParentType, ContextType>;
  user_districts?: Resolver<Maybe<Array<ResolversTypes['District']>>, ParentType, ContextType>;
  user_organisations?: Resolver<Maybe<Array<ResolversTypes['OrganisationUser']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserInvitationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UserInvitation'] = ResolversParentTypes['UserInvitation']> = ResolversObject<{
  catchment_district_ids?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invitation_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organisation_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ttl?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserInvitationResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UserInvitationResult'] = ResolversParentTypes['UserInvitationResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'UserInvitation', ParentType, ContextType>;
}>;

export type UserResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UserResult'] = ResolversParentTypes['UserResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'User', ParentType, ContextType>;
}>;

export interface UtcOffsetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UtcOffset'], any> {
  name: 'UtcOffset';
}

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type WaterNetworkResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['WaterNetwork'] = ResolversParentTypes['WaterNetwork']> = ResolversObject<{
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plant_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['NetworkOwnershipType'], ParentType, ContextType>;
  water_network_water_connections?: Resolver<Maybe<Array<ResolversTypes['ServiceAreaWaterConnection']>>, ParentType, ContextType>;
  water_treatment_plant?: Resolver<Maybe<ResolversTypes['WaterTreatmentPlantResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WaterNetworkResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['WaterNetworkResult'] = ResolversParentTypes['WaterNetworkResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'WaterNetwork', ParentType, ContextType>;
}>;

export type WaterProductionSiteResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['WaterProductionSite'] = ResolversParentTypes['WaterProductionSite']> = ResolversObject<{
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gps?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plant_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  static_discharge_head?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  static_suction_head?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['WaterProductionSiteType'], ParentType, ContextType>;
  water_treatment_plant?: Resolver<Maybe<ResolversTypes['WaterTreatmentPlantResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WaterStorageTankResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['WaterStorageTank'] = ResolversParentTypes['WaterStorageTank']> = ResolversObject<{
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gps?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plant_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  storage_capacity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['WaterStorageTankType'], ParentType, ContextType>;
  water_treatment_plant?: Resolver<Maybe<ResolversTypes['WaterTreatmentPlantResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WaterTreatmentPlantResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['WaterTreatmentPlant'] = ResolversParentTypes['WaterTreatmentPlant']> = ResolversObject<{
  catchment_district?: Resolver<Maybe<ResolversTypes['CatchmentDistrictResult']>, ParentType, ContextType>;
  catchment_district_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gps?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  production_capacity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  water_network?: Resolver<ResolversTypes['WaterNetworkResult'], ParentType, ContextType>;
  water_production_sites?: Resolver<Maybe<Array<ResolversTypes['WaterProductionSite']>>, ParentType, ContextType>;
  water_source?: Resolver<ResolversTypes['WaterSourceType'], ParentType, ContextType>;
  water_storage_tanks?: Resolver<Maybe<Array<ResolversTypes['WaterStorageTank']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WaterTreatmentPlantResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['WaterTreatmentPlantResult'] = ResolversParentTypes['WaterTreatmentPlantResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'WaterTreatmentPlant', ParentType, ContextType>;
}>;

export type Resolvers<ContextType = GraphQLContext> = ResolversObject<{
  AccountNumber?: GraphQLScalarType;
  ApiBatchPayload?: ApiBatchPayloadResolvers<ContextType>;
  ApiBatchPayloadResult?: ApiBatchPayloadResultResolvers<ContextType>;
  ApiCreateError?: ApiCreateErrorResolvers<ContextType>;
  ApiDeleteError?: ApiDeleteErrorResolvers<ContextType>;
  ApiError?: ApiErrorResolvers<ContextType>;
  ApiLoginError?: ApiLoginErrorResolvers<ContextType>;
  ApiNotFoundError?: ApiNotFoundErrorResolvers<ContextType>;
  ApiOperationError?: ApiOperationErrorResolvers<ContextType>;
  ApiPasswordResetError?: ApiPasswordResetErrorResolvers<ContextType>;
  ApiUpdateError?: ApiUpdateErrorResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Byte?: GraphQLScalarType;
  CatchmentDistrict?: CatchmentDistrictResolvers<ContextType>;
  CatchmentDistrictResult?: CatchmentDistrictResultResolvers<ContextType>;
  CatchmentProvince?: CatchmentProvinceResolvers<ContextType>;
  CatchmentProvinceResult?: CatchmentProvinceResultResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  CountryCode?: GraphQLScalarType;
  CountryResult?: CountryResultResolvers<ContextType>;
  CreateOrganisationIndicatorsResult?: CreateOrganisationIndicatorsResultResolvers<ContextType>;
  CreateOrganisationIndicatorsSuccess?: CreateOrganisationIndicatorsSuccessResolvers<ContextType>;
  CreateSewerTreatmentPlantPayload?: CreateSewerTreatmentPlantPayloadResolvers<ContextType>;
  CreateWaterProductionSitePayload?: CreateWaterProductionSitePayloadResolvers<ContextType>;
  CreateWaterStorageTankPayload?: CreateWaterStorageTankPayloadResolvers<ContextType>;
  CreateWaterTreatmentPlantPayload?: CreateWaterTreatmentPlantPayloadResolvers<ContextType>;
  Currency?: GraphQLScalarType;
  DID?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DeleteWaterProductionSitePayload?: DeleteWaterProductionSitePayloadResolvers<ContextType>;
  DeleteWaterStorageTankPayload?: DeleteWaterStorageTankPayloadResolvers<ContextType>;
  Disaggregate?: DisaggregateResolvers<ContextType>;
  DisaggregateOption?: DisaggregateOptionResolvers<ContextType>;
  DisaggregateOptionResult?: DisaggregateOptionResultResolvers<ContextType>;
  DisaggregateResult?: DisaggregateResultResolvers<ContextType>;
  District?: DistrictResolvers<ContextType>;
  DistrictResult?: DistrictResultResolvers<ContextType>;
  DistrictUser?: DistrictUserResolvers<ContextType>;
  DistrictUserResult?: DistrictUserResultResolvers<ContextType>;
  Duration?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  ErrorField?: ErrorFieldResolvers<ContextType>;
  GUID?: GraphQLScalarType;
  HSL?: GraphQLScalarType;
  HSLA?: GraphQLScalarType;
  HexColorCode?: GraphQLScalarType;
  Hexadecimal?: GraphQLScalarType;
  IBAN?: GraphQLScalarType;
  IPv4?: GraphQLScalarType;
  IPv6?: GraphQLScalarType;
  ISBN?: GraphQLScalarType;
  ISO8601Duration?: GraphQLScalarType;
  Indicator?: IndicatorResolvers<ContextType>;
  IndicatorDisaggregate?: IndicatorDisaggregateResolvers<ContextType>;
  IndicatorDisaggregateReport?: IndicatorDisaggregateReportResolvers<ContextType>;
  IndicatorDisaggregateReportResult?: IndicatorDisaggregateReportResultResolvers<ContextType>;
  IndicatorDisaggregateResult?: IndicatorDisaggregateResultResolvers<ContextType>;
  IndicatorResult?: IndicatorResultResolvers<ContextType>;
  IndicatorUnit?: IndicatorUnitResolvers<ContextType>;
  IndicatorUnitResult?: IndicatorUnitResultResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  JWT?: GraphQLScalarType;
  Latitude?: GraphQLScalarType;
  LocalDate?: GraphQLScalarType;
  LocalEndTime?: GraphQLScalarType;
  LocalTime?: GraphQLScalarType;
  Locale?: GraphQLScalarType;
  LoginResult?: LoginResultResolvers<ContextType>;
  LoginSuccess?: LoginSuccessResolvers<ContextType>;
  Long?: GraphQLScalarType;
  Longitude?: GraphQLScalarType;
  MAC?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  NegativeFloat?: GraphQLScalarType;
  NegativeInt?: GraphQLScalarType;
  NonEmptyString?: GraphQLScalarType;
  NonNegativeFloat?: GraphQLScalarType;
  NonNegativeInt?: GraphQLScalarType;
  NonPositiveFloat?: GraphQLScalarType;
  NonPositiveInt?: GraphQLScalarType;
  ObjectID?: GraphQLScalarType;
  Option?: OptionResolvers<ContextType>;
  OptionResult?: OptionResultResolvers<ContextType>;
  Organisation?: OrganisationResolvers<ContextType>;
  OrganisationIndicator?: OrganisationIndicatorResolvers<ContextType>;
  OrganisationIndicatorResult?: OrganisationIndicatorResultResolvers<ContextType>;
  OrganisationReportTemplate?: OrganisationReportTemplateResolvers<ContextType>;
  OrganisationReportTemplateResult?: OrganisationReportTemplateResultResolvers<ContextType>;
  OrganisationResult?: OrganisationResultResolvers<ContextType>;
  OrganisationUser?: OrganisationUserResolvers<ContextType>;
  OrganisationUserResult?: OrganisationUserResultResolvers<ContextType>;
  PasswordResetRequestPayload?: PasswordResetRequestPayloadResolvers<ContextType>;
  PasswordResetRequestResult?: PasswordResetRequestResultResolvers<ContextType>;
  PasswordResetResult?: PasswordResetResultResolvers<ContextType>;
  PhoneNumber?: GraphQLScalarType;
  Port?: GraphQLScalarType;
  PositiveFloat?: GraphQLScalarType;
  PositiveInt?: GraphQLScalarType;
  PostalCode?: GraphQLScalarType;
  Province?: ProvinceResolvers<ContextType>;
  ProvinceResult?: ProvinceResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RGB?: GraphQLScalarType;
  RGBA?: GraphQLScalarType;
  Report?: ReportResolvers<ContextType>;
  ReportResult?: ReportResultResolvers<ContextType>;
  ReportTemplate?: ReportTemplateResolvers<ContextType>;
  ReportTemplateResult?: ReportTemplateResultResolvers<ContextType>;
  Residence?: ResidenceResolvers<ContextType>;
  ResidenceResult?: ResidenceResultResolvers<ContextType>;
  RoutingNumber?: GraphQLScalarType;
  SafeInt?: GraphQLScalarType;
  ServiceArea?: ServiceAreaResolvers<ContextType>;
  ServiceAreaResult?: ServiceAreaResultResolvers<ContextType>;
  ServiceAreaSewerConnection?: ServiceAreaSewerConnectionResolvers<ContextType>;
  ServiceAreaSewerConnectionResult?: ServiceAreaSewerConnectionResultResolvers<ContextType>;
  ServiceAreaWaterConnection?: ServiceAreaWaterConnectionResolvers<ContextType>;
  ServiceAreaWaterConnectionResult?: ServiceAreaWaterConnectionResultResolvers<ContextType>;
  SewerNetwork?: SewerNetworkResolvers<ContextType>;
  SewerNetworkResult?: SewerNetworkResultResolvers<ContextType>;
  SewerTreatmentPlant?: SewerTreatmentPlantResolvers<ContextType>;
  SewerTreatmentPlantResult?: SewerTreatmentPlantResultResolvers<ContextType>;
  Time?: GraphQLScalarType;
  TimeZone?: GraphQLScalarType;
  Timestamp?: GraphQLScalarType;
  URL?: GraphQLScalarType;
  USCurrency?: GraphQLScalarType;
  UUID?: GraphQLScalarType;
  UnsignedFloat?: GraphQLScalarType;
  UnsignedInt?: GraphQLScalarType;
  UpdateSewerTreatmentPlantPayload?: UpdateSewerTreatmentPlantPayloadResolvers<ContextType>;
  UpdateWaterProductionSitePayload?: UpdateWaterProductionSitePayloadResolvers<ContextType>;
  UpdateWaterStorageTankPayload?: UpdateWaterStorageTankPayloadResolvers<ContextType>;
  UpdateWaterTreatmentPlantPayload?: UpdateWaterTreatmentPlantPayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserInvitation?: UserInvitationResolvers<ContextType>;
  UserInvitationResult?: UserInvitationResultResolvers<ContextType>;
  UserResult?: UserResultResolvers<ContextType>;
  UtcOffset?: GraphQLScalarType;
  Void?: GraphQLScalarType;
  WaterNetwork?: WaterNetworkResolvers<ContextType>;
  WaterNetworkResult?: WaterNetworkResultResolvers<ContextType>;
  WaterProductionSite?: WaterProductionSiteResolvers<ContextType>;
  WaterStorageTank?: WaterStorageTankResolvers<ContextType>;
  WaterTreatmentPlant?: WaterTreatmentPlantResolvers<ContextType>;
  WaterTreatmentPlantResult?: WaterTreatmentPlantResultResolvers<ContextType>;
}>;

