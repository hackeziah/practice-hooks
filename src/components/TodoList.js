import React, {useContext} from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// class TodoList extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isDarkTheme, lightTheme, darkTheme, changeTheme} = this.context;
//     const theme = isDarkTheme ? darkTheme : lightTheme;

//     return (
//       <div
//         style={{
//           background: theme.background,
//           color: theme.text,
//           height: "140px",
//           textAlign: "center",
//         }}
//       >
//         <p className="item"> Plan the family trip</p>
//         <p className="item"> Atmos Kaizen</p>
//         <p className="item"> Walking 6 am</p>
//         <button className='ui button primary' onClick={changeTheme}>
//         Change Theme
//         </button>
//       </div>
//     );
//   }
// }

const TodoList = () => {
  const { isDarkTheme, lightTheme, darkTheme, changeTheme} = useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <div
    style={{
      background: theme.background,
      color: theme.text,
      height: "140px",
      textAlign: "center",
    }}
  >
    <p className="item"> Plan the family trip</p>
    <p className="item"> Atmos Kaizen</p>
    <p className="item"> Walking 6 am</p>
    <button className='ui button primary' onClick={changeTheme}>
    Change Theme
    </button>
  </div>
  );
}
export default TodoList;
