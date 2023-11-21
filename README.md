# to-do-list-application-breake-into-component

broke into component

data stores in local storage

 useEffect(() => {
 
    localStorage.setItem("ITEMS", JSON.stringify(todos))
    
  }, [todos])

recieve data from local storage

useState(() => {

    const localvalue = localStorage.getItem("ITEMS")
    
    return JSON.parse(localvalue)
  });
