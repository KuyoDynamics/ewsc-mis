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

export type ApiBatchPayloadResult = ApiDeleteError | DeleteBatchPayload;

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
  service_areas?: Maybe<Array<ServiceArea>>;
  sewer_treatment_plants?: Maybe<Array<SewerTreatmentPlant>>;
  water_treatment_plants?: Maybe<Array<WaterTreatmentPlant>>;
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
  option_name: Scalars['String'];
};

export type CreateDisaggregateOptionSetInput = {
  disaggregate_id: Scalars['ID'];
  disaggregate_option_id: Scalars['ID'];
};

export type CreateDistrictInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  province_id: Scalars['String'];
};

export type CreateDistrictUserInput = {
  catchment_district_id: Scalars['ID'];
  organisation_user_id: Scalars['ID'];
};

export type CreateIndicatorUnitInput = {
  display_name: Scalars['String'];
  unit: Scalars['String'];
};

export type CreateInvitedUserInput = {
  catchment_district_ids: Array<Scalars['ID']>;
  organisation_id: Scalars['ID'];
  user_details: CreateUserInput;
  user_invitation_id: Scalars['ID'];
};

export type CreateOrganisationInput = {
  country_id: Scalars['String'];
  logo?: InputMaybe<Scalars['Byte']>;
  name: Scalars['String'];
};

export type CreateOrganisationUserInput = {
  organisation_id: Scalars['ID'];
  user_id: Scalars['ID'];
};

export type CreateProvinceInput = {
  code: Scalars['String'];
  country_id: Scalars['String'];
  name: Scalars['String'];
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
  user_roles: Array<UserRoleType>;
};

export type CreateUserInvitationInput = {
  district_ids: Array<Scalars['String']>;
  email: Scalars['String'];
  organisation_id: Scalars['String'];
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

export type DeleteBatchPayload = {
  __typename?: 'DeleteBatchPayload';
  count: Scalars['Int'];
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

export type DeleteDisaggregateOptionSetInput = {
  id: Scalars['ID'];
};

export type DeleteDistrictInput = {
  id: Scalars['ID'];
};

export type DeleteDistrictUserInput = {
  id: Scalars['ID'];
};

export type DeleteIndicatorUnitInput = {
  id: Scalars['ID'];
};

export type DeleteOrganisationInput = {
  id: Scalars['ID'];
};

export type DeleteOrganisationUserInput = {
  id: Scalars['ID'];
};

export type DeleteProvinceInput = {
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
  disaggregate_option_set?: Maybe<Array<DisaggregateOptionSet>>;
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
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  option_name: Scalars['String'];
};

export type DisaggregateOptionResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | DisaggregateOption;

export type DisaggregateOptionSet = {
  __typename?: 'DisaggregateOptionSet';
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  disaggregate_id: Scalars['ID'];
  disaggregate_option?: Maybe<DisaggregateOptionResult>;
  disaggregate_option_id: Scalars['ID'];
  id: Scalars['ID'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
};

export type DisaggregateOptionSetResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | DisaggregateOptionSet;

export type DisaggregateOptionUpdateInput = {
  option_name: Scalars['String'];
};

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
  province?: Maybe<ProvinceResult>;
  province_id: Scalars['String'];
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
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  organisation_user?: Maybe<OrganisationUserResult>;
  organisation_user_id: Scalars['ID'];
};

export type DistrictUserResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | DistrictUser;

export type ErrorField = {
  __typename?: 'ErrorField';
  field: Scalars['String'];
  message: Scalars['String'];
};

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

export type LoginInput = {
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
};

export type LoginResult = ApiLoginError | LoginSuccess;

export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  accessToken?: Maybe<Scalars['JWT']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCatchmentDistrict: CatchmentDistrictResult;
  createCatchmentProvince: CatchmentProvinceResult;
  createCountry: CountryResult;
  createDisaggregate: DisaggregateResult;
  createDisaggregateOption: DisaggregateOptionResult;
  createDisaggregateOptionSet: DisaggregateOptionSetResult;
  createDistrict: DistrictResult;
  createDistrictUser: DistrictUserResult;
  createIndicatorUnit: IndicatorUnitResult;
  createInvitedUser: UserResult;
  createOrganisation: OrganisationResult;
  createOrganisationUser: OrganisationUserResult;
  createProvince: ProvinceResult;
  createResidence: ResidenceResult;
  createServiceArea: ServiceAreaResult;
  createServiceAreaSewerConnection: ServiceAreaSewerConnectionResult;
  createServiceAreaWaterConnection: ServiceAreaWaterConnectionResult;
  createSewerNetwork: SewerNetworkResult;
  createSewerTreatmentPlant: SewerTreatmentPlantResult;
  createUser: UserResult;
  createUserInvitation?: Maybe<CreateUserInvitationPayload>;
  createWaterNetwork: WaterNetworkResult;
  createWaterProductionSite?: Maybe<CreateWaterProductionSitePayload>;
  createWaterStorageTank?: Maybe<CreateWaterStorageTankPayload>;
  createWaterTreatmentPlant: WaterTreatmentPlantResult;
  deleteCatchmentDistrict: CatchmentDistrictResult;
  deleteCatchmentProvince: CatchmentProvinceResult;
  deleteCountry: CountryResult;
  deleteDisaggregate: DisaggregateResult;
  deleteDisaggregateOption: DisaggregateOptionResult;
  deleteDisaggregateOptionSet: DisaggregateOptionSetResult;
  deleteDistrict: DistrictResult;
  deleteDistrictUser: DistrictUserResult;
  deleteIndicatorUnit: IndicatorUnitResult;
  deleteOrganisation: OrganisationResult;
  deleteOrganisationUser: OrganisationUserResult;
  deleteProvince: ProvinceResult;
  deleteResidence: ResidenceResult;
  deleteServiceArea: ServiceAreaResult;
  deleteServiceAreaSewerConnection: ServiceAreaSewerConnectionResult;
  deleteServiceAreaWaterConnection: ServiceAreaWaterConnectionResult;
  deleteSewerNetwork: SewerNetworkResult;
  deleteSewerTreatmentPlants: ApiBatchPayloadResult;
  deleteUser: UserResult;
  deleteUserInvitation?: Maybe<DeleteUserInvitationPayload>;
  deleteWaterNetwork: WaterNetworkResult;
  deleteWaterProductionSite?: Maybe<DeleteWaterProductionSitePayload>;
  deleteWaterStorageTank?: Maybe<DeleteWaterStorageTankPayload>;
  deleteWaterTreatmentPlants: ApiBatchPayloadResult;
  disableUser: UserResult;
  login: LoginResult;
  requestPasswordReset: PasswordResetRequestResult;
  resetPassword: PasswordResetResult;
  updateCatchmentDistrict: CatchmentDistrictResult;
  updateCatchmentProvince: CatchmentProvinceResult;
  updateCountry: CountryResult;
  updateDisaggregate: DisaggregateResult;
  updateDisaggregateOption: DisaggregateOptionResult;
  updateDistrict: DistrictResult;
  updateIndicatorUnit: IndicatorUnitResult;
  updateOrganisation: OrganisationResult;
  updateOrganisationUser: OrganisationUserResult;
  updateProvince: ProvinceResult;
  updateResidence: ResidenceResult;
  updateServiceAreaSewerConnection: ServiceAreaSewerConnectionResult;
  updateServiceAreaWaterConnection: ServiceAreaWaterConnectionResult;
  updateSewerNetwork: SewerNetworkResult;
  updateSewerTreatmentPlant: SewerTreatmentPlantResult;
  updateUser: UserResult;
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


export type MutationCreateDisaggregateOptionSetArgs = {
  input: CreateDisaggregateOptionSetInput;
};


export type MutationCreateDistrictArgs = {
  input: CreateDistrictInput;
};


export type MutationCreateDistrictUserArgs = {
  input: CreateDistrictUserInput;
};


export type MutationCreateIndicatorUnitArgs = {
  input: CreateIndicatorUnitInput;
};


export type MutationCreateInvitedUserArgs = {
  input: CreateInvitedUserInput;
};


export type MutationCreateOrganisationArgs = {
  input: CreateOrganisationInput;
};


export type MutationCreateOrganisationUserArgs = {
  input: CreateOrganisationUserInput;
};


export type MutationCreateProvinceArgs = {
  input: CreateProvinceInput;
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


export type MutationDeleteDisaggregateOptionSetArgs = {
  input: DeleteDisaggregateOptionSetInput;
};


export type MutationDeleteDistrictArgs = {
  input: DeleteDistrictInput;
};


export type MutationDeleteDistrictUserArgs = {
  input: DeleteDistrictUserInput;
};


export type MutationDeleteIndicatorUnitArgs = {
  input: DeleteIndicatorUnitInput;
};


export type MutationDeleteOrganisationArgs = {
  input: DeleteOrganisationInput;
};


export type MutationDeleteOrganisationUserArgs = {
  input: DeleteOrganisationUserInput;
};


export type MutationDeleteProvinceArgs = {
  input: DeleteProvinceInput;
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


export type MutationUpdateDisaggregateOptionArgs = {
  input: UpdateDisaggregateOptionInput;
};


export type MutationUpdateDistrictArgs = {
  input: UpdateDistrictInput;
};


export type MutationUpdateIndicatorUnitArgs = {
  input: UpdateIndicatorUnitInput;
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

export type Organisation = {
  __typename?: 'Organisation';
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
  users?: Maybe<Array<OrganisationUser>>;
};

export type OrganisationResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | Organisation;

export type OrganisationUpdateInput = {
  logo?: InputMaybe<Scalars['Byte']>;
  name?: InputMaybe<Scalars['String']>;
};

export type OrganisationUser = {
  __typename?: 'OrganisationUser';
  created_at: Scalars['DateTime'];
  created_by: Scalars['String'];
  id: Scalars['ID'];
  is_owner: Scalars['Boolean'];
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  organisation?: Maybe<OrganisationResult>;
  organisation_id: Scalars['String'];
  user?: Maybe<UserResult>;
  user_id: Scalars['String'];
};

export type OrganisationUserResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | OrganisationUser;

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
  disaggregate: DisaggregateResult;
  disaggregate_option: DisaggregateOptionResult;
  disaggregate_option_set: DisaggregateOptionSetResult;
  disaggregate_option_sets?: Maybe<Array<DisaggregateOptionSet>>;
  disaggregate_options?: Maybe<Array<DisaggregateOption>>;
  disaggregates?: Maybe<Array<Disaggregate>>;
  district: DistrictResult;
  district_user: DistrictUserResult;
  district_users?: Maybe<Array<DistrictUser>>;
  districts?: Maybe<Array<District>>;
  indicator_unit: IndicatorUnitResult;
  indicator_units?: Maybe<Array<IndicatorUnit>>;
  me: UserResult;
  organisation?: Maybe<OrganisationResult>;
  organisation_user: OrganisationUserResult;
  organisation_users?: Maybe<Array<OrganisationUser>>;
  organisations?: Maybe<Array<Organisation>>;
  province: ProvinceResult;
  provinces?: Maybe<Array<Province>>;
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
  user_invitation?: Maybe<UserInvitation>;
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


export type QueryDisaggregateArgs = {
  id: Scalars['ID'];
};


export type QueryDisaggregate_OptionArgs = {
  id: Scalars['ID'];
};


export type QueryDisaggregate_Option_SetArgs = {
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


export type QueryIndicator_UnitArgs = {
  id: Scalars['ID'];
};


export type QueryOrganisationArgs = {
  id: Scalars['ID'];
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
  args: UserInvitationsArgsInput;
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

export type UpdateDisaggregateOptionInput = {
  id: Scalars['ID'];
  update: DisaggregateOptionUpdateInput;
};

export type UpdateDistrictInput = {
  id: Scalars['ID'];
  update: DistrictUpdateInput;
};

export type UpdateIndicatorUnitInput = {
  id: Scalars['ID'];
  update: IndicatorUnitUpdateInput;
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
  disabled?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  hashed_confirmation_token?: Maybe<Scalars['String']>;
  hashed_password_reset_token?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  last_login?: Maybe<Scalars['DateTime']>;
  last_modified_at: Scalars['DateTime'];
  last_modified_by: Scalars['String'];
  last_name: Scalars['String'];
  theme?: Maybe<UserTheme>;
  user_organisations?: Maybe<Array<OrganisationUser>>;
  user_roles: Array<UserRoleType>;
};

export type UserDisableInput = {
  disabled: Scalars['Boolean'];
};

export type UserInvitation = {
  __typename?: 'UserInvitation';
  district_ids?: Maybe<Array<Scalars['String']>>;
  email: Scalars['String'];
  id: Scalars['ID'];
  invitation_token: Scalars['String'];
  organisation_id: Scalars['String'];
  ttl: Scalars['DateTime'];
};

export type UserInvitationsArgsInput = {
  district_ids?: InputMaybe<Array<Scalars['String']>>;
  email?: InputMaybe<Scalars['String']>;
  organisation_id?: InputMaybe<Scalars['String']>;
};

export type UserResult = ApiCreateError | ApiDeleteError | ApiNotFoundError | ApiUpdateError | User;

export enum UserRoleType {
  Admin = 'ADMIN',
  Approver = 'APPROVER',
  DataEntry = 'DATA_ENTRY',
  Support = 'SUPPORT',
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
  ApiBatchPayloadResult: ResolversTypes['ApiDeleteError'] | ResolversTypes['DeleteBatchPayload'];
  ApiCreateError: ResolverTypeWrapper<ApiCreateError>;
  ApiDeleteError: ResolverTypeWrapper<ApiDeleteError>;
  ApiError: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiLoginError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiPasswordResetError'] | ResolversTypes['ApiUpdateError'];
  ApiLoginError: ResolverTypeWrapper<ApiLoginError>;
  ApiNotFoundError: ResolverTypeWrapper<ApiNotFoundError>;
  ApiPasswordResetError: ResolverTypeWrapper<ApiPasswordResetError>;
  ApiUpdateError: ResolverTypeWrapper<ApiUpdateError>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Byte: ResolverTypeWrapper<Scalars['Byte']>;
  CatchmentDistrict: ResolverTypeWrapper<Omit<CatchmentDistrict, 'catchment_province' | 'district'> & { catchment_province?: Maybe<ResolversTypes['CatchmentProvinceResult']>, district?: Maybe<ResolversTypes['DistrictResult']> }>;
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
  CreateDisaggregateOptionSetInput: CreateDisaggregateOptionSetInput;
  CreateDistrictInput: CreateDistrictInput;
  CreateDistrictUserInput: CreateDistrictUserInput;
  CreateIndicatorUnitInput: CreateIndicatorUnitInput;
  CreateInvitedUserInput: CreateInvitedUserInput;
  CreateOrganisationInput: CreateOrganisationInput;
  CreateOrganisationUserInput: CreateOrganisationUserInput;
  CreateProvinceInput: CreateProvinceInput;
  CreateResidenceInput: CreateResidenceInput;
  CreateServiceAreaInput: CreateServiceAreaInput;
  CreateServiceAreaSewerConnectionInput: CreateServiceAreaSewerConnectionInput;
  CreateServiceAreaWaterConnectionInput: CreateServiceAreaWaterConnectionInput;
  CreateSewerNetworkInput: CreateSewerNetworkInput;
  CreateSewerTreatmentPlantInput: CreateSewerTreatmentPlantInput;
  CreateSewerTreatmentPlantPayload: ResolverTypeWrapper<CreateSewerTreatmentPlantPayload>;
  CreateUserInput: CreateUserInput;
  CreateUserInvitationInput: CreateUserInvitationInput;
  CreateUserInvitationPayload: ResolverTypeWrapper<CreateUserInvitationPayload>;
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
  DeleteBatchPayload: ResolverTypeWrapper<DeleteBatchPayload>;
  DeleteCatchmentDistrictInput: DeleteCatchmentDistrictInput;
  DeleteCatchmentProvinceInput: DeleteCatchmentProvinceInput;
  DeleteCountryInput: DeleteCountryInput;
  DeleteDisaggregateInput: DeleteDisaggregateInput;
  DeleteDisaggregateOptionInput: DeleteDisaggregateOptionInput;
  DeleteDisaggregateOptionSetInput: DeleteDisaggregateOptionSetInput;
  DeleteDistrictInput: DeleteDistrictInput;
  DeleteDistrictUserInput: DeleteDistrictUserInput;
  DeleteIndicatorUnitInput: DeleteIndicatorUnitInput;
  DeleteOrganisationInput: DeleteOrganisationInput;
  DeleteOrganisationUserInput: DeleteOrganisationUserInput;
  DeleteProvinceInput: DeleteProvinceInput;
  DeleteResidenceInput: DeleteResidenceInput;
  DeleteServiceAreaInput: DeleteServiceAreaInput;
  DeleteServiceAreaSewerConnectionInput: DeleteServiceAreaSewerConnectionInput;
  DeleteServiceAreaWaterConnectionInput: DeleteServiceAreaWaterConnectionInput;
  DeleteSewerTreatmentPlantsInput: DeleteSewerTreatmentPlantsInput;
  DeleteUserInput: DeleteUserInput;
  DeleteUserInvitationInput: DeleteUserInvitationInput;
  DeleteUserInvitationPayload: ResolverTypeWrapper<DeleteUserInvitationPayload>;
  DeleteWaterProductionSiteInput: DeleteWaterProductionSiteInput;
  DeleteWaterProductionSitePayload: ResolverTypeWrapper<DeleteWaterProductionSitePayload>;
  DeleteWaterStorageTankInput: DeleteWaterStorageTankInput;
  DeleteWaterStorageTankPayload: ResolverTypeWrapper<DeleteWaterStorageTankPayload>;
  DeleteWaterTreatmentPlantsInput: DeleteWaterTreatmentPlantsInput;
  DisableUserInput: DisableUserInput;
  Disaggregate: ResolverTypeWrapper<Disaggregate>;
  DisaggregateOption: ResolverTypeWrapper<DisaggregateOption>;
  DisaggregateOptionResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['DisaggregateOption'];
  DisaggregateOptionSet: ResolverTypeWrapper<Omit<DisaggregateOptionSet, 'disaggregate_option'> & { disaggregate_option?: Maybe<ResolversTypes['DisaggregateOptionResult']> }>;
  DisaggregateOptionSetResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['DisaggregateOptionSet'];
  DisaggregateOptionUpdateInput: DisaggregateOptionUpdateInput;
  DisaggregateResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['Disaggregate'];
  DisaggregateType: DisaggregateType;
  DisaggregateUpdateInput: DisaggregateUpdateInput;
  District: ResolverTypeWrapper<Omit<District, 'province'> & { province?: Maybe<ResolversTypes['ProvinceResult']> }>;
  DistrictResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['District'];
  DistrictUpdateInput: DistrictUpdateInput;
  DistrictUser: ResolverTypeWrapper<Omit<DistrictUser, 'catchment_district' | 'organisation_user'> & { catchment_district?: Maybe<ResolversTypes['CatchmentDistrictResult']>, organisation_user?: Maybe<ResolversTypes['OrganisationUserResult']> }>;
  DistrictUserResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['DistrictUser'];
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
  IndicatorUnit: ResolverTypeWrapper<IndicatorUnit>;
  IndicatorUnitResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['IndicatorUnit'];
  IndicatorUnitUpdateInput: IndicatorUnitUpdateInput;
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
  Organisation: ResolverTypeWrapper<Omit<Organisation, 'country'> & { country?: Maybe<ResolversTypes['CountryResult']> }>;
  OrganisationResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['Organisation'];
  OrganisationUpdateInput: OrganisationUpdateInput;
  OrganisationUser: ResolverTypeWrapper<Omit<OrganisationUser, 'organisation' | 'user'> & { organisation?: Maybe<ResolversTypes['OrganisationResult']>, user?: Maybe<ResolversTypes['UserResult']> }>;
  OrganisationUserResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['OrganisationUser'];
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
  Residence: ResolverTypeWrapper<Omit<Residence, 'district'> & { district?: Maybe<ResolversTypes['DistrictResult']> }>;
  ResidenceClassification: ResidenceClassification;
  ResidenceResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['Residence'];
  ResidenceUpdateInput: ResidenceUpdateInput;
  RoutingNumber: ResolverTypeWrapper<Scalars['RoutingNumber']>;
  SafeInt: ResolverTypeWrapper<Scalars['SafeInt']>;
  ServiceArea: ResolverTypeWrapper<Omit<ServiceArea, 'catchment_district' | 'residence'> & { catchment_district: ResolversTypes['CatchmentDistrictResult'], residence?: Maybe<ResolversTypes['ResidenceResult']> }>;
  ServiceAreaResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['ServiceArea'];
  ServiceAreaSewerConnection: ResolverTypeWrapper<Omit<ServiceAreaSewerConnection, 'service_area' | 'sewer_network'> & { service_area?: Maybe<ResolversTypes['ServiceAreaResult']>, sewer_network?: Maybe<ResolversTypes['SewerNetworkResult']> }>;
  ServiceAreaSewerConnectionResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['ServiceAreaSewerConnection'];
  ServiceAreaSewerConnectionUpdateInput: ServiceAreaSewerConnectionUpdateInput;
  ServiceAreaWaterConnection: ResolverTypeWrapper<Omit<ServiceAreaWaterConnection, 'service_area' | 'water_network'> & { service_area?: Maybe<ResolversTypes['ServiceAreaResult']>, water_network?: Maybe<ResolversTypes['WaterNetworkResult']> }>;
  ServiceAreaWaterConnectionResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['ServiceAreaWaterConnection'];
  ServiceAreaWaterConnectionUpdateInput: ServiceAreaWaterConnectionUpdateInput;
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
  UpdateDisaggregateOptionInput: UpdateDisaggregateOptionInput;
  UpdateDistrictInput: UpdateDistrictInput;
  UpdateIndicatorUnitInput: UpdateIndicatorUnitInput;
  UpdateOrganisationInput: UpdateOrganisationInput;
  UpdateOrganisationUserInput: UpdateOrganisationUserInput;
  UpdateProvinceInput: UpdateProvinceInput;
  UpdateResidenceInput: UpdateResidenceInput;
  UpdateServiceAreaSewerConnectionInput: UpdateServiceAreaSewerConnectionInput;
  UpdateServiceAreaWaterConnectionInput: UpdateServiceAreaWaterConnectionInput;
  UpdateSewerNetworkInput: UpdateSewerNetworkInput;
  UpdateSewerTreatmentPlantInput: UpdateSewerTreatmentPlantInput;
  UpdateSewerTreatmentPlantPayload: ResolverTypeWrapper<UpdateSewerTreatmentPlantPayload>;
  UpdateUserInput: UpdateUserInput;
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
  UserInvitationsArgsInput: UserInvitationsArgsInput;
  UserResult: ResolversTypes['ApiCreateError'] | ResolversTypes['ApiDeleteError'] | ResolversTypes['ApiNotFoundError'] | ResolversTypes['ApiUpdateError'] | ResolversTypes['User'];
  UserRoleType: UserRoleType;
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
  ApiBatchPayloadResult: ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['DeleteBatchPayload'];
  ApiCreateError: ApiCreateError;
  ApiDeleteError: ApiDeleteError;
  ApiError: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiLoginError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiPasswordResetError'] | ResolversParentTypes['ApiUpdateError'];
  ApiLoginError: ApiLoginError;
  ApiNotFoundError: ApiNotFoundError;
  ApiPasswordResetError: ApiPasswordResetError;
  ApiUpdateError: ApiUpdateError;
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  Byte: Scalars['Byte'];
  CatchmentDistrict: Omit<CatchmentDistrict, 'catchment_province' | 'district'> & { catchment_province?: Maybe<ResolversParentTypes['CatchmentProvinceResult']>, district?: Maybe<ResolversParentTypes['DistrictResult']> };
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
  CreateDisaggregateOptionSetInput: CreateDisaggregateOptionSetInput;
  CreateDistrictInput: CreateDistrictInput;
  CreateDistrictUserInput: CreateDistrictUserInput;
  CreateIndicatorUnitInput: CreateIndicatorUnitInput;
  CreateInvitedUserInput: CreateInvitedUserInput;
  CreateOrganisationInput: CreateOrganisationInput;
  CreateOrganisationUserInput: CreateOrganisationUserInput;
  CreateProvinceInput: CreateProvinceInput;
  CreateResidenceInput: CreateResidenceInput;
  CreateServiceAreaInput: CreateServiceAreaInput;
  CreateServiceAreaSewerConnectionInput: CreateServiceAreaSewerConnectionInput;
  CreateServiceAreaWaterConnectionInput: CreateServiceAreaWaterConnectionInput;
  CreateSewerNetworkInput: CreateSewerNetworkInput;
  CreateSewerTreatmentPlantInput: CreateSewerTreatmentPlantInput;
  CreateSewerTreatmentPlantPayload: CreateSewerTreatmentPlantPayload;
  CreateUserInput: CreateUserInput;
  CreateUserInvitationInput: CreateUserInvitationInput;
  CreateUserInvitationPayload: CreateUserInvitationPayload;
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
  DeleteBatchPayload: DeleteBatchPayload;
  DeleteCatchmentDistrictInput: DeleteCatchmentDistrictInput;
  DeleteCatchmentProvinceInput: DeleteCatchmentProvinceInput;
  DeleteCountryInput: DeleteCountryInput;
  DeleteDisaggregateInput: DeleteDisaggregateInput;
  DeleteDisaggregateOptionInput: DeleteDisaggregateOptionInput;
  DeleteDisaggregateOptionSetInput: DeleteDisaggregateOptionSetInput;
  DeleteDistrictInput: DeleteDistrictInput;
  DeleteDistrictUserInput: DeleteDistrictUserInput;
  DeleteIndicatorUnitInput: DeleteIndicatorUnitInput;
  DeleteOrganisationInput: DeleteOrganisationInput;
  DeleteOrganisationUserInput: DeleteOrganisationUserInput;
  DeleteProvinceInput: DeleteProvinceInput;
  DeleteResidenceInput: DeleteResidenceInput;
  DeleteServiceAreaInput: DeleteServiceAreaInput;
  DeleteServiceAreaSewerConnectionInput: DeleteServiceAreaSewerConnectionInput;
  DeleteServiceAreaWaterConnectionInput: DeleteServiceAreaWaterConnectionInput;
  DeleteSewerTreatmentPlantsInput: DeleteSewerTreatmentPlantsInput;
  DeleteUserInput: DeleteUserInput;
  DeleteUserInvitationInput: DeleteUserInvitationInput;
  DeleteUserInvitationPayload: DeleteUserInvitationPayload;
  DeleteWaterProductionSiteInput: DeleteWaterProductionSiteInput;
  DeleteWaterProductionSitePayload: DeleteWaterProductionSitePayload;
  DeleteWaterStorageTankInput: DeleteWaterStorageTankInput;
  DeleteWaterStorageTankPayload: DeleteWaterStorageTankPayload;
  DeleteWaterTreatmentPlantsInput: DeleteWaterTreatmentPlantsInput;
  DisableUserInput: DisableUserInput;
  Disaggregate: Disaggregate;
  DisaggregateOption: DisaggregateOption;
  DisaggregateOptionResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['DisaggregateOption'];
  DisaggregateOptionSet: Omit<DisaggregateOptionSet, 'disaggregate_option'> & { disaggregate_option?: Maybe<ResolversParentTypes['DisaggregateOptionResult']> };
  DisaggregateOptionSetResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['DisaggregateOptionSet'];
  DisaggregateOptionUpdateInput: DisaggregateOptionUpdateInput;
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
  IndicatorUnit: IndicatorUnit;
  IndicatorUnitResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['IndicatorUnit'];
  IndicatorUnitUpdateInput: IndicatorUnitUpdateInput;
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
  Organisation: Omit<Organisation, 'country'> & { country?: Maybe<ResolversParentTypes['CountryResult']> };
  OrganisationResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['Organisation'];
  OrganisationUpdateInput: OrganisationUpdateInput;
  OrganisationUser: Omit<OrganisationUser, 'organisation' | 'user'> & { organisation?: Maybe<ResolversParentTypes['OrganisationResult']>, user?: Maybe<ResolversParentTypes['UserResult']> };
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
  Residence: Omit<Residence, 'district'> & { district?: Maybe<ResolversParentTypes['DistrictResult']> };
  ResidenceResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['Residence'];
  ResidenceUpdateInput: ResidenceUpdateInput;
  RoutingNumber: Scalars['RoutingNumber'];
  SafeInt: Scalars['SafeInt'];
  ServiceArea: Omit<ServiceArea, 'catchment_district' | 'residence'> & { catchment_district: ResolversParentTypes['CatchmentDistrictResult'], residence?: Maybe<ResolversParentTypes['ResidenceResult']> };
  ServiceAreaResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['ServiceArea'];
  ServiceAreaSewerConnection: Omit<ServiceAreaSewerConnection, 'service_area' | 'sewer_network'> & { service_area?: Maybe<ResolversParentTypes['ServiceAreaResult']>, sewer_network?: Maybe<ResolversParentTypes['SewerNetworkResult']> };
  ServiceAreaSewerConnectionResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['ServiceAreaSewerConnection'];
  ServiceAreaSewerConnectionUpdateInput: ServiceAreaSewerConnectionUpdateInput;
  ServiceAreaWaterConnection: Omit<ServiceAreaWaterConnection, 'service_area' | 'water_network'> & { service_area?: Maybe<ResolversParentTypes['ServiceAreaResult']>, water_network?: Maybe<ResolversParentTypes['WaterNetworkResult']> };
  ServiceAreaWaterConnectionResult: ResolversParentTypes['ApiCreateError'] | ResolversParentTypes['ApiDeleteError'] | ResolversParentTypes['ApiNotFoundError'] | ResolversParentTypes['ApiUpdateError'] | ResolversParentTypes['ServiceAreaWaterConnection'];
  ServiceAreaWaterConnectionUpdateInput: ServiceAreaWaterConnectionUpdateInput;
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
  UpdateDisaggregateOptionInput: UpdateDisaggregateOptionInput;
  UpdateDistrictInput: UpdateDistrictInput;
  UpdateIndicatorUnitInput: UpdateIndicatorUnitInput;
  UpdateOrganisationInput: UpdateOrganisationInput;
  UpdateOrganisationUserInput: UpdateOrganisationUserInput;
  UpdateProvinceInput: UpdateProvinceInput;
  UpdateResidenceInput: UpdateResidenceInput;
  UpdateServiceAreaSewerConnectionInput: UpdateServiceAreaSewerConnectionInput;
  UpdateServiceAreaWaterConnectionInput: UpdateServiceAreaWaterConnectionInput;
  UpdateSewerNetworkInput: UpdateSewerNetworkInput;
  UpdateSewerTreatmentPlantInput: UpdateSewerTreatmentPlantInput;
  UpdateSewerTreatmentPlantPayload: UpdateSewerTreatmentPlantPayload;
  UpdateUserInput: UpdateUserInput;
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
  UserInvitationsArgsInput: UserInvitationsArgsInput;
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

export type ApiBatchPayloadResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ApiBatchPayloadResult'] = ResolversParentTypes['ApiBatchPayloadResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiDeleteError' | 'DeleteBatchPayload', ParentType, ContextType>;
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
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiLoginError' | 'ApiNotFoundError' | 'ApiPasswordResetError' | 'ApiUpdateError', ParentType, ContextType>;
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

export type CreateSewerTreatmentPlantPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateSewerTreatmentPlantPayload'] = ResolversParentTypes['CreateSewerTreatmentPlantPayload']> = ResolversObject<{
  sewer_treatment_plant?: Resolver<ResolversTypes['SewerTreatmentPlant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateUserInvitationPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateUserInvitationPayload'] = ResolversParentTypes['CreateUserInvitationPayload']> = ResolversObject<{
  user_invitation?: Resolver<Maybe<ResolversTypes['UserInvitation']>, ParentType, ContextType>;
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

export type DeleteBatchPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DeleteBatchPayload'] = ResolversParentTypes['DeleteBatchPayload']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteUserInvitationPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DeleteUserInvitationPayload'] = ResolversParentTypes['DeleteUserInvitationPayload']> = ResolversObject<{
  user_invitation?: Resolver<Maybe<ResolversTypes['UserInvitation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

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
  disaggregate_option_set?: Resolver<Maybe<Array<ResolversTypes['DisaggregateOptionSet']>>, ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  option_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DisaggregateOptionResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DisaggregateOptionResult'] = ResolversParentTypes['DisaggregateOptionResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'DisaggregateOption', ParentType, ContextType>;
}>;

export type DisaggregateOptionSetResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DisaggregateOptionSet'] = ResolversParentTypes['DisaggregateOptionSet']> = ResolversObject<{
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  disaggregate_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  disaggregate_option?: Resolver<Maybe<ResolversTypes['DisaggregateOptionResult']>, ParentType, ContextType>;
  disaggregate_option_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DisaggregateOptionSetResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['DisaggregateOptionSetResult'] = ResolversParentTypes['DisaggregateOptionSetResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'DisaggregateOptionSet', ParentType, ContextType>;
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
  province?: Resolver<Maybe<ResolversTypes['ProvinceResult']>, ParentType, ContextType>;
  province_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organisation_user?: Resolver<Maybe<ResolversTypes['OrganisationUserResult']>, ParentType, ContextType>;
  organisation_user_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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
  accessToken?: Resolver<Maybe<ResolversTypes['JWT']>, ParentType, ContextType>;
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
  createDisaggregateOptionSet?: Resolver<ResolversTypes['DisaggregateOptionSetResult'], ParentType, ContextType, RequireFields<MutationCreateDisaggregateOptionSetArgs, 'input'>>;
  createDistrict?: Resolver<ResolversTypes['DistrictResult'], ParentType, ContextType, RequireFields<MutationCreateDistrictArgs, 'input'>>;
  createDistrictUser?: Resolver<ResolversTypes['DistrictUserResult'], ParentType, ContextType, RequireFields<MutationCreateDistrictUserArgs, 'input'>>;
  createIndicatorUnit?: Resolver<ResolversTypes['IndicatorUnitResult'], ParentType, ContextType, RequireFields<MutationCreateIndicatorUnitArgs, 'input'>>;
  createInvitedUser?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<MutationCreateInvitedUserArgs, 'input'>>;
  createOrganisation?: Resolver<ResolversTypes['OrganisationResult'], ParentType, ContextType, RequireFields<MutationCreateOrganisationArgs, 'input'>>;
  createOrganisationUser?: Resolver<ResolversTypes['OrganisationUserResult'], ParentType, ContextType, RequireFields<MutationCreateOrganisationUserArgs, 'input'>>;
  createProvince?: Resolver<ResolversTypes['ProvinceResult'], ParentType, ContextType, RequireFields<MutationCreateProvinceArgs, 'input'>>;
  createResidence?: Resolver<ResolversTypes['ResidenceResult'], ParentType, ContextType, RequireFields<MutationCreateResidenceArgs, 'input'>>;
  createServiceArea?: Resolver<ResolversTypes['ServiceAreaResult'], ParentType, ContextType, RequireFields<MutationCreateServiceAreaArgs, 'input'>>;
  createServiceAreaSewerConnection?: Resolver<ResolversTypes['ServiceAreaSewerConnectionResult'], ParentType, ContextType, RequireFields<MutationCreateServiceAreaSewerConnectionArgs, 'input'>>;
  createServiceAreaWaterConnection?: Resolver<ResolversTypes['ServiceAreaWaterConnectionResult'], ParentType, ContextType, RequireFields<MutationCreateServiceAreaWaterConnectionArgs, 'input'>>;
  createSewerNetwork?: Resolver<ResolversTypes['SewerNetworkResult'], ParentType, ContextType, RequireFields<MutationCreateSewerNetworkArgs, 'input'>>;
  createSewerTreatmentPlant?: Resolver<ResolversTypes['SewerTreatmentPlantResult'], ParentType, ContextType, RequireFields<MutationCreateSewerTreatmentPlantArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  createUserInvitation?: Resolver<Maybe<ResolversTypes['CreateUserInvitationPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserInvitationArgs, 'input'>>;
  createWaterNetwork?: Resolver<ResolversTypes['WaterNetworkResult'], ParentType, ContextType, RequireFields<MutationCreateWaterNetworkArgs, 'input'>>;
  createWaterProductionSite?: Resolver<Maybe<ResolversTypes['CreateWaterProductionSitePayload']>, ParentType, ContextType, RequireFields<MutationCreateWaterProductionSiteArgs, 'input'>>;
  createWaterStorageTank?: Resolver<Maybe<ResolversTypes['CreateWaterStorageTankPayload']>, ParentType, ContextType, RequireFields<MutationCreateWaterStorageTankArgs, 'input'>>;
  createWaterTreatmentPlant?: Resolver<ResolversTypes['WaterTreatmentPlantResult'], ParentType, ContextType, RequireFields<MutationCreateWaterTreatmentPlantArgs, 'input'>>;
  deleteCatchmentDistrict?: Resolver<ResolversTypes['CatchmentDistrictResult'], ParentType, ContextType, RequireFields<MutationDeleteCatchmentDistrictArgs, 'input'>>;
  deleteCatchmentProvince?: Resolver<ResolversTypes['CatchmentProvinceResult'], ParentType, ContextType, RequireFields<MutationDeleteCatchmentProvinceArgs, 'input'>>;
  deleteCountry?: Resolver<ResolversTypes['CountryResult'], ParentType, ContextType, RequireFields<MutationDeleteCountryArgs, 'input'>>;
  deleteDisaggregate?: Resolver<ResolversTypes['DisaggregateResult'], ParentType, ContextType, RequireFields<MutationDeleteDisaggregateArgs, 'input'>>;
  deleteDisaggregateOption?: Resolver<ResolversTypes['DisaggregateOptionResult'], ParentType, ContextType, RequireFields<MutationDeleteDisaggregateOptionArgs, 'input'>>;
  deleteDisaggregateOptionSet?: Resolver<ResolversTypes['DisaggregateOptionSetResult'], ParentType, ContextType, RequireFields<MutationDeleteDisaggregateOptionSetArgs, 'input'>>;
  deleteDistrict?: Resolver<ResolversTypes['DistrictResult'], ParentType, ContextType, RequireFields<MutationDeleteDistrictArgs, 'input'>>;
  deleteDistrictUser?: Resolver<ResolversTypes['DistrictUserResult'], ParentType, ContextType, RequireFields<MutationDeleteDistrictUserArgs, 'input'>>;
  deleteIndicatorUnit?: Resolver<ResolversTypes['IndicatorUnitResult'], ParentType, ContextType, RequireFields<MutationDeleteIndicatorUnitArgs, 'input'>>;
  deleteOrganisation?: Resolver<ResolversTypes['OrganisationResult'], ParentType, ContextType, RequireFields<MutationDeleteOrganisationArgs, 'input'>>;
  deleteOrganisationUser?: Resolver<ResolversTypes['OrganisationUserResult'], ParentType, ContextType, RequireFields<MutationDeleteOrganisationUserArgs, 'input'>>;
  deleteProvince?: Resolver<ResolversTypes['ProvinceResult'], ParentType, ContextType, RequireFields<MutationDeleteProvinceArgs, 'input'>>;
  deleteResidence?: Resolver<ResolversTypes['ResidenceResult'], ParentType, ContextType, RequireFields<MutationDeleteResidenceArgs, 'input'>>;
  deleteServiceArea?: Resolver<ResolversTypes['ServiceAreaResult'], ParentType, ContextType, RequireFields<MutationDeleteServiceAreaArgs, 'input'>>;
  deleteServiceAreaSewerConnection?: Resolver<ResolversTypes['ServiceAreaSewerConnectionResult'], ParentType, ContextType, RequireFields<MutationDeleteServiceAreaSewerConnectionArgs, 'input'>>;
  deleteServiceAreaWaterConnection?: Resolver<ResolversTypes['ServiceAreaWaterConnectionResult'], ParentType, ContextType, RequireFields<MutationDeleteServiceAreaWaterConnectionArgs, 'input'>>;
  deleteSewerNetwork?: Resolver<ResolversTypes['SewerNetworkResult'], ParentType, ContextType, RequireFields<MutationDeleteSewerNetworkArgs, 'id'>>;
  deleteSewerTreatmentPlants?: Resolver<ResolversTypes['ApiBatchPayloadResult'], ParentType, ContextType, RequireFields<MutationDeleteSewerTreatmentPlantsArgs, 'filter'>>;
  deleteUser?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'input'>>;
  deleteUserInvitation?: Resolver<Maybe<ResolversTypes['DeleteUserInvitationPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserInvitationArgs, 'input'>>;
  deleteWaterNetwork?: Resolver<ResolversTypes['WaterNetworkResult'], ParentType, ContextType, RequireFields<MutationDeleteWaterNetworkArgs, 'id'>>;
  deleteWaterProductionSite?: Resolver<Maybe<ResolversTypes['DeleteWaterProductionSitePayload']>, ParentType, ContextType, RequireFields<MutationDeleteWaterProductionSiteArgs, 'input'>>;
  deleteWaterStorageTank?: Resolver<Maybe<ResolversTypes['DeleteWaterStorageTankPayload']>, ParentType, ContextType, RequireFields<MutationDeleteWaterStorageTankArgs, 'input'>>;
  deleteWaterTreatmentPlants?: Resolver<ResolversTypes['ApiBatchPayloadResult'], ParentType, ContextType, RequireFields<MutationDeleteWaterTreatmentPlantsArgs, 'filter'>>;
  disableUser?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<MutationDisableUserArgs, 'input'>>;
  login?: Resolver<ResolversTypes['LoginResult'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  requestPasswordReset?: Resolver<ResolversTypes['PasswordResetRequestResult'], ParentType, ContextType, RequireFields<MutationRequestPasswordResetArgs, 'input'>>;
  resetPassword?: Resolver<ResolversTypes['PasswordResetResult'], ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'input'>>;
  updateCatchmentDistrict?: Resolver<ResolversTypes['CatchmentDistrictResult'], ParentType, ContextType, RequireFields<MutationUpdateCatchmentDistrictArgs, 'input'>>;
  updateCatchmentProvince?: Resolver<ResolversTypes['CatchmentProvinceResult'], ParentType, ContextType, RequireFields<MutationUpdateCatchmentProvinceArgs, 'input'>>;
  updateCountry?: Resolver<ResolversTypes['CountryResult'], ParentType, ContextType, RequireFields<MutationUpdateCountryArgs, 'input'>>;
  updateDisaggregate?: Resolver<ResolversTypes['DisaggregateResult'], ParentType, ContextType, RequireFields<MutationUpdateDisaggregateArgs, 'input'>>;
  updateDisaggregateOption?: Resolver<ResolversTypes['DisaggregateOptionResult'], ParentType, ContextType, RequireFields<MutationUpdateDisaggregateOptionArgs, 'input'>>;
  updateDistrict?: Resolver<ResolversTypes['DistrictResult'], ParentType, ContextType, RequireFields<MutationUpdateDistrictArgs, 'input'>>;
  updateIndicatorUnit?: Resolver<ResolversTypes['IndicatorUnitResult'], ParentType, ContextType, RequireFields<MutationUpdateIndicatorUnitArgs, 'input'>>;
  updateOrganisation?: Resolver<ResolversTypes['OrganisationResult'], ParentType, ContextType, RequireFields<MutationUpdateOrganisationArgs, 'input'>>;
  updateOrganisationUser?: Resolver<ResolversTypes['OrganisationUserResult'], ParentType, ContextType, RequireFields<MutationUpdateOrganisationUserArgs, 'input'>>;
  updateProvince?: Resolver<ResolversTypes['ProvinceResult'], ParentType, ContextType, RequireFields<MutationUpdateProvinceArgs, 'input'>>;
  updateResidence?: Resolver<ResolversTypes['ResidenceResult'], ParentType, ContextType, RequireFields<MutationUpdateResidenceArgs, 'input'>>;
  updateServiceAreaSewerConnection?: Resolver<ResolversTypes['ServiceAreaSewerConnectionResult'], ParentType, ContextType, RequireFields<MutationUpdateServiceAreaSewerConnectionArgs, 'input'>>;
  updateServiceAreaWaterConnection?: Resolver<ResolversTypes['ServiceAreaWaterConnectionResult'], ParentType, ContextType, RequireFields<MutationUpdateServiceAreaWaterConnectionArgs, 'input'>>;
  updateSewerNetwork?: Resolver<ResolversTypes['SewerNetworkResult'], ParentType, ContextType, RequireFields<MutationUpdateSewerNetworkArgs, 'input'>>;
  updateSewerTreatmentPlant?: Resolver<ResolversTypes['SewerTreatmentPlantResult'], ParentType, ContextType, RequireFields<MutationUpdateSewerTreatmentPlantArgs, 'input'>>;
  updateUser?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
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

export type OrganisationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Organisation'] = ResolversParentTypes['Organisation']> = ResolversObject<{
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
  users?: Resolver<Maybe<Array<ResolversTypes['OrganisationUser']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrganisationResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OrganisationResult'] = ResolversParentTypes['OrganisationResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ApiCreateError' | 'ApiDeleteError' | 'ApiNotFoundError' | 'ApiUpdateError' | 'Organisation', ParentType, ContextType>;
}>;

export type OrganisationUserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OrganisationUser'] = ResolversParentTypes['OrganisationUser']> = ResolversObject<{
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_owner?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organisation?: Resolver<Maybe<ResolversTypes['OrganisationResult']>, ParentType, ContextType>;
  organisation_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  disaggregate?: Resolver<ResolversTypes['DisaggregateResult'], ParentType, ContextType, RequireFields<QueryDisaggregateArgs, 'id'>>;
  disaggregate_option?: Resolver<ResolversTypes['DisaggregateOptionResult'], ParentType, ContextType, RequireFields<QueryDisaggregate_OptionArgs, 'id'>>;
  disaggregate_option_set?: Resolver<ResolversTypes['DisaggregateOptionSetResult'], ParentType, ContextType, RequireFields<QueryDisaggregate_Option_SetArgs, 'id'>>;
  disaggregate_option_sets?: Resolver<Maybe<Array<ResolversTypes['DisaggregateOptionSet']>>, ParentType, ContextType>;
  disaggregate_options?: Resolver<Maybe<Array<ResolversTypes['DisaggregateOption']>>, ParentType, ContextType>;
  disaggregates?: Resolver<Maybe<Array<ResolversTypes['Disaggregate']>>, ParentType, ContextType>;
  district?: Resolver<ResolversTypes['DistrictResult'], ParentType, ContextType, RequireFields<QueryDistrictArgs, 'id'>>;
  district_user?: Resolver<ResolversTypes['DistrictUserResult'], ParentType, ContextType, RequireFields<QueryDistrict_UserArgs, 'district_user_id'>>;
  district_users?: Resolver<Maybe<Array<ResolversTypes['DistrictUser']>>, ParentType, ContextType, RequireFields<QueryDistrict_UsersArgs, 'catchment_district_id'>>;
  districts?: Resolver<Maybe<Array<ResolversTypes['District']>>, ParentType, ContextType, RequireFields<QueryDistrictsArgs, 'province_id'>>;
  indicator_unit?: Resolver<ResolversTypes['IndicatorUnitResult'], ParentType, ContextType, RequireFields<QueryIndicator_UnitArgs, 'id'>>;
  indicator_units?: Resolver<Maybe<Array<ResolversTypes['IndicatorUnit']>>, ParentType, ContextType>;
  me?: Resolver<ResolversTypes['UserResult'], ParentType, ContextType>;
  organisation?: Resolver<Maybe<ResolversTypes['OrganisationResult']>, ParentType, ContextType, RequireFields<QueryOrganisationArgs, 'id'>>;
  organisation_user?: Resolver<ResolversTypes['OrganisationUserResult'], ParentType, ContextType, RequireFields<QueryOrganisation_UserArgs, 'organisation_user_id'>>;
  organisation_users?: Resolver<Maybe<Array<ResolversTypes['OrganisationUser']>>, ParentType, ContextType, RequireFields<QueryOrganisation_UsersArgs, 'organisation_id'>>;
  organisations?: Resolver<Maybe<Array<ResolversTypes['Organisation']>>, ParentType, ContextType, RequireFields<QueryOrganisationsArgs, 'country_id'>>;
  province?: Resolver<ResolversTypes['ProvinceResult'], ParentType, ContextType, RequireFields<QueryProvinceArgs, 'id'>>;
  provinces?: Resolver<Maybe<Array<ResolversTypes['Province']>>, ParentType, ContextType, RequireFields<QueryProvincesArgs, 'country_id'>>;
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
  user_invitation?: Resolver<Maybe<ResolversTypes['UserInvitation']>, ParentType, ContextType, RequireFields<QueryUser_InvitationArgs, 'id'>>;
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
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hashed_confirmation_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hashed_password_reset_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_login?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  last_modified_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  last_modified_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  last_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  theme?: Resolver<Maybe<ResolversTypes['UserTheme']>, ParentType, ContextType>;
  user_organisations?: Resolver<Maybe<Array<ResolversTypes['OrganisationUser']>>, ParentType, ContextType>;
  user_roles?: Resolver<Array<ResolversTypes['UserRoleType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserInvitationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UserInvitation'] = ResolversParentTypes['UserInvitation']> = ResolversObject<{
  district_ids?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invitation_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organisation_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ttl?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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
  ApiBatchPayloadResult?: ApiBatchPayloadResultResolvers<ContextType>;
  ApiCreateError?: ApiCreateErrorResolvers<ContextType>;
  ApiDeleteError?: ApiDeleteErrorResolvers<ContextType>;
  ApiError?: ApiErrorResolvers<ContextType>;
  ApiLoginError?: ApiLoginErrorResolvers<ContextType>;
  ApiNotFoundError?: ApiNotFoundErrorResolvers<ContextType>;
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
  CreateSewerTreatmentPlantPayload?: CreateSewerTreatmentPlantPayloadResolvers<ContextType>;
  CreateUserInvitationPayload?: CreateUserInvitationPayloadResolvers<ContextType>;
  CreateWaterProductionSitePayload?: CreateWaterProductionSitePayloadResolvers<ContextType>;
  CreateWaterStorageTankPayload?: CreateWaterStorageTankPayloadResolvers<ContextType>;
  CreateWaterTreatmentPlantPayload?: CreateWaterTreatmentPlantPayloadResolvers<ContextType>;
  Currency?: GraphQLScalarType;
  DID?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DeleteBatchPayload?: DeleteBatchPayloadResolvers<ContextType>;
  DeleteUserInvitationPayload?: DeleteUserInvitationPayloadResolvers<ContextType>;
  DeleteWaterProductionSitePayload?: DeleteWaterProductionSitePayloadResolvers<ContextType>;
  DeleteWaterStorageTankPayload?: DeleteWaterStorageTankPayloadResolvers<ContextType>;
  Disaggregate?: DisaggregateResolvers<ContextType>;
  DisaggregateOption?: DisaggregateOptionResolvers<ContextType>;
  DisaggregateOptionResult?: DisaggregateOptionResultResolvers<ContextType>;
  DisaggregateOptionSet?: DisaggregateOptionSetResolvers<ContextType>;
  DisaggregateOptionSetResult?: DisaggregateOptionSetResultResolvers<ContextType>;
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
  Organisation?: OrganisationResolvers<ContextType>;
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

