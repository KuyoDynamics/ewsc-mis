import { useGetIndicatorUnitsQuery } from '../../../graphql/generated';

const useGetIndicatorUnits = () => {
  const { data } = useGetIndicatorUnitsQuery();

  return data.indicator_units ?? [];
};

export default useGetIndicatorUnits;
