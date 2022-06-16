import { allow, shield, and } from "graphql-shield";
import {
  canSeeUserSensitiveData,
  isAdmin,
  isAuthenticated,
  isEditor,
  isValidUserInvitation,
} from "./rules";

const permissions = shield(
  {
    Query: {
      // Country
      // countries: isAuthenticated,
      country: isAuthenticated,
      // Province
      // provinces: isAuthenticated,
      province: isAuthenticated,
      // District
      district_user: isAuthenticated,
      district: isAuthenticated,
      district_users: isAuthenticated,
      districts: isAuthenticated,
      // User
      me: isAuthenticated,
      users: and(isAuthenticated, isAdmin),
      user: isAuthenticated,
      user_invitations: and(isAuthenticated, isAdmin),
      // Organisation
      // allOrganisations: isAuthenticated,
      // organisations: isAuthenticated,
      organisation: isAuthenticated,
      organisation_user: isAuthenticated,
      organisation_users: isAuthenticated,
      // Catchment Province
      catchment_province: isAuthenticated,
      catchment_provinces: isAuthenticated,
      // Catchment District
      catchment_district: isAuthenticated,
      catchment_districts: isAuthenticated,
      // WaterNetwork
      water_network: isAuthenticated,
      water_networks: isAuthenticated,
      // WaterTreatmentPlant
      water_treatment_plants: isAuthenticated,
      water_treatment_plant: isAuthenticated,
    },
    Mutation: {
      // Country
      createCountry: isAuthenticated,
      updateCountry: isAuthenticated,
      deleteCountry: isAuthenticated,
      // Province
      createProvince: isAuthenticated,
      deleteProvince: isAuthenticated,
      updateProvince: isAuthenticated,
      // District
      createDistrict: isAuthenticated,
      updateDistrict: isAuthenticated,
      deleteDistrict: isAuthenticated,
      // User
      createUserInvitation: isAuthenticated,
      createInvitedUser: isValidUserInvitation,
      deleteUserInvitation: isAuthenticated,
      createUser: and(isAuthenticated, isAdmin),
      deleteUser: and(isAuthenticated, isAdmin),
      disableUser: and(isAuthenticated, isAdmin),
      updateUser: isAuthenticated,
      login: allow,
      requestPasswordReset: allow,
      resetPassword: allow,
      // Organisation
      createOrganisation: isAuthenticated,
      deleteOrganisation: isAuthenticated,
      deleteOrganisationUser: isAuthenticated,
      updateOrganisation: isAuthenticated,
      createOrganisationUser: isAuthenticated,
      updateOrganisationUser: isAuthenticated,
      // Catchment Province
      createCatchmentProvince: isAuthenticated,
      deleteCatchmentProvince: isAuthenticated,
      updateCatchmentProvince: isAuthenticated,
      // Catchment District
      createCatchmentDistrict: isAuthenticated,
      deleteCatchmentDistrict: isAuthenticated,
      updateCatchmentDistrict: isAuthenticated,
      createDistrictUser: isAuthenticated,
      deleteDistrictUser: isAuthenticated,
      // WaterNetwork
      createWaterNetwork: and(isAuthenticated, isEditor),
      updateWaterNetwork: and(isAuthenticated, isEditor),
      deleteWaterNetwork: and(isAuthenticated, isAdmin),
      // WaterTreatmentPlant
      createWaterTreatmentPlant: and(isAuthenticated, isEditor),
      updateWaterTreatmentPlant: and(isAuthenticated, isEditor),
      deleteWaterTreatmentPlants: and(isAuthenticated, isAdmin),
    },
    // Types
    CatchmentDistrict: isAuthenticated,
    CatchmentProvince: isAuthenticated,
    Country: isAuthenticated,
    CreateCatchmentDistrictPayload: isAuthenticated,
    CreateCatchmentProvincePayload: isAuthenticated,
    CreateDistrictUserPayload: isAuthenticated,
    CreateInvitedUserPayload: allow,
    CreateOrganisationUserPayload: isAuthenticated,
    CreateUserInvitationPayload: allow,
    CreateUserPayoad: isAuthenticated,
    DeleteCatchmentDistrictPayload: isAuthenticated,
    DeleteCatchmentProvincePayload: isAuthenticated,
    DeleteDistrictUserPayload: isAuthenticated,
    DeleteOrganisationUserPayload: isAuthenticated,
    DeleteUserInvitationPayload: allow,
    DeleteUserPayload: isAuthenticated,
    DisableUserPayload: isAuthenticated,
    District: isAuthenticated,
    DistrictUser: isAuthenticated,
    LoginPayload: allow,
    Organisation: isAuthenticated,
    OrganisationUser: isAuthenticated,
    PasswordResetPayload: allow,
    PasswordResetRequestPayload: allow,
    Province: isAuthenticated,
    UpdateCatchmentDistrictPayload: isAuthenticated,
    UpdateCatchmentProvincePayload: isAuthenticated,
    UpdateOrganisationUserPayload: isAuthenticated,
    UpdateUserPayload: isAuthenticated,
    User: {
      "*": allow,
      hashed_password_reset_token: and(
        isAuthenticated,
        canSeeUserSensitiveData
      ),
    },
    UserInvitation: isAuthenticated,
    WaterTreatmentPlant: isAuthenticated,
    WaterNetwork: isAuthenticated,
  },
  { allowExternalErrors: true }
);

export { permissions };
