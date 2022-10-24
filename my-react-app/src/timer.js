function Timer () {
    const c = '0'
   const n = setTimeout ((c) => c + 1, 1000);
   return <h1>{n}</h1>
    
};

export default Timer