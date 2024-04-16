
function Card ({myData}){
    return(
        <div className="div">

        
            <div className="grid grid-cols-4 ml-12 pt-4">
                {
                myData.map((items) => {
                    return(
                        <div className="flex gap-4 pt-4">
                            <img className="w-[100px] h-[100px] rounded-full" src={items.image} alt=""></img>
                            <div className="grid place-items-center">
                                <div>
                                    <p className="text-1xl font-bold" >{items.name}</p>
                                    <p className="text-1xl ">{items.desc}</p>
                                </div>
                            </div>
                                    
                              
                        </div>
                    )

                })
            }
            </div>
            <div className="grid grid-cols-2 ml-2 pt-4">
                {
                myData.map((items) => {
                    return(
                        <div className="flex gap-4 p-6 grid place-items-center">
                            <img className="w-[500px] h-[500px] " src={items.image} alt=""></img>     
                        </div>
                    )

                })
            }
            </div>




        </div>

     
    )
}
export default Card