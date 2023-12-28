
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';



const Testimonials = () => {
  return (
    
    <div className="p-5">
        <h1 className="text-4xl">Testimonials</h1>
        <div className="flex max-w-5xl mx-auto gap-8 group">
            <div className="bg-white/10 rounded-xl group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8">
                <h4 className="text-lg">Kathy Kimzey</h4>
                <p className="text-sm leading-7 my-3 font-light opacity-50"> "a month ago
                    We arrived at 4:00am on a Wednesday and the guy behind the counter couldn’t have been nicer.
                    They had hot food and it was good. Biscuits and gravy and even fried chicken.
                    Thanks for making our travels and stops a good experience."
                </p>
                <div >
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
             
            </div>
            <div className="bg-white/10 rounded-xl group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8">
                <h4 className="text-lg">James</h4>
                <p className="text-sm leading-7 my-3 font-light opacity-50">
                "Who knew a gas station could house such a hidden treasure like Dun-n-1's coffee corner! I stumbled upon this gem during a pit stop and was pleasantly surprised. The coffee they brew here is top-notch, rivaling standalone cafes. 
                The convenience of grabbing a superb cup of joe while on the road is unmatched. 
                Kudos to Dun-n-1 for elevating the gas station coffee experience!"
                </p>
                <div >
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
             
            </div>
            <div className="bg-white/10 rounded-xl group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8">
                <h4 className="text-lg">Sophia</h4>
                <p className="text-sm leading-7 my-3 font-light opacity-50"> 
                "I'm thoroughly impressed by the quality they maintain amidst the hustle of a fuel station. 
                The rich aroma of their blends and the attention to detail in crafting
                 each cup reflects a genuine commitment to excellence. 
                 A definite stop for travelers seeking both convenience and exceptional coffee."
                </p>
                <div >
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Testimonials;