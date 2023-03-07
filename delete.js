let AryOfObject = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
  {
    id: 3,
    name: "c",
  },
  {
    id: 4,
    name: "d",
  },
];


const removeDuplicate=(array,key)=>{
    return array.reduce((ary,item)=>{
        
        const reduced=ary.filter((v)=>{
            console.log("v[key]!==item[key]",v[key],item[key]);
            
            return v[key]!==item[key]})
        
        return [...reduced,item]
    },[])

}
console.log(removeDuplicate(AryOfObject,"name"))