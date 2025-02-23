import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
let productArray = [
    {
        productName: "cloths",
        productImage: image1,
        productPrice: 50.0,
    },
    {
        productName: "cloths2",
        productImage: image2,
        productPrice: 500.0,
    },
];

export default function Shop() {
    return (
        <>
            <div className="bg-slate-300 h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-max  justify-around bg-slate-300 col-span-3">
                    <button>
                        <div className="flex flex-col m-5 justify-start">
                            <img
                                className="w-full h-full "
                                src={productArray[0].productImage}
                                alt={productArray[0].productName}
                            />
                            <div>{productArray[0].productName}</div>
                            <div>${productArray[0].productPrice}</div>
                        </div>
                    </button>
                    <button>
                        <div className="flex flex-col m-5">
                            <img
                                className="w-full h-full "
                                src={productArray[1].productImage}
                                alt={productArray[1].productName}
                            />
                            <div>{productArray[1].productName}</div>
                            <div>${productArray[1].productPrice}</div>
                        </div>
                    </button>
                    <button>
                        <div className="flex flex-col m-5 justify-start">
                            <img
                                className="w-full h-full "
                                src={productArray[0].productImage}
                                alt={productArray[0].productName}
                            />
                            <div>{productArray[0].productName}</div>
                            <div>${productArray[0].productPrice}</div>
                        </div>
                    </button>

                    <button>
                        <div className="flex flex-col m-5">
                            <img
                                className="w-full h-full "
                                src={productArray[1].productImage}
                                alt={productArray[1].productName}
                            />
                            <div>{productArray[1].productName}</div>
                            <div>${productArray[1].productPrice}</div>
                        </div>
                    </button>
                    <button>
                        <div className="flex flex-col m-5 justify-start">
                            <img
                                className="w-full h-full "
                                src={productArray[0].productImage}
                                alt={productArray[0].productName}
                            />
                            <div>{productArray[0].productName}</div>
                            <div>${productArray[0].productPrice}</div>
                        </div>
                    </button>

                    <button>
                        <div className="flex flex-col m-5">
                            <img
                                className="w-full h-full "
                                src={productArray[1].productImage}
                                alt={productArray[1].productName}
                            />
                            <div>{productArray[1].productName}</div>
                            <div>${productArray[1].productPrice}</div>
                        </div>
                    </button>
                    
                </div>
            </div>
        </>
    );
}
