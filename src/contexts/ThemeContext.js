import React, {createContext} from 'react';

export const ThemeContext = createContext(); //creating Context 

class ThemeContextProvider extends React.Component{

    state = {
        isDarkTheme: true,
        lightTheme:{
            text:'#222',
            background: '#d8ddf1'
        },

        darkTheme:{
            text: '#fff',
            background: '#5c5c5c'
        }

    }
    changeTheme = () => {
        this.setState({isDarkTheme: !this.state.isDarkTheme})
    }

    render() {
        return(
            // Provide a data here
            // all .. means
           <ThemeContext.Provider value={{...this.state, changeTheme: this.changeTheme}}> 
                {this.props.children}
           </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;
