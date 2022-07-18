// import React from 'react';
// import Switch from '@material-ui/core/Switch';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(({ palette, shadows }) => ({
//   circle: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 20,
//     height: 20,
//     borderRadius: '50%',
//     backgroundColor: palette.background.default,
//     boxShadow: shadows[1],
//   },
//   active: {
//     backgroundColor: palette.secondary.main,
//   },
// }));

// const Switches = () => {
//   const classes = useStyles();
//   const [switchValue, setSwitchValue] = React.useState(false);
//   const [loading, setLoading] = React.useState(false);

//   const handleChange = () => {
//     setSwitchValue(!switchValue);
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   };

//   const Icon = () => (
//     <div
//       className={`${classes.circle} ${
//         switchValue && !loading ? classes.active : ''
//       }`}
//     >
//       {loading && (
//         <CircularProgress size={14} color="secondary" thickness={6} />
//       )}
//     </div>
//   );

//   return (
//     <Switch
//       checkedIcon={<Icon />}
//       icon={<Icon />}
//       // disabled={loading}
//       checked={switchValue}
//       onChange={handleChange}
//       value="checkedA"
//       inputProps={{ 'aria-label': 'Switch with loading state' }}
//     />
//   );
// };

// export default Switches;
