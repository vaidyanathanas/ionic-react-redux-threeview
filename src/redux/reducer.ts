export default function reducer (state={}, { type, userData }: { type: string, userData: any }): any  {

  switch (type) {
    case "Add_User":
      console.log(state);      
      return { ...state, userData}
  }

  return state;
}

