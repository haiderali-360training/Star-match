
import './App.css';
import React,{useState} from 'react';


const StarPad = (props) => {
    return (
        <div className="Startbox" > 
            { props.slist.map( a => (  <label key={a}> * </label>  ) )  }  
        </div>
    );
}

const NumberPad = (props) => {

    const onClickHandle=(c, event ) => {  

        if(event.target.className=='Button') {
            event.target.className='Button_disabled';
            props.onClick(c);   
        }       
    }
    return (
        <div  className="Numberbox">
            {
                props.list.map( (d,i) => ( 
                <button className='Button'
                onClick={ (event) => { onClickHandle (d, event)  ; }  }
                key={i+'_'}> {d} 
            </button>) ) }                   
        </div>
    );
}



const StarGame = () => {

    const min = 1, max = 9;
    const collection = [0,1,2,3,4,5,6,7,8,9];
    let rem = Math.floor( ( Math.random() * (max - min) + min  ));
    const [random, setRandom] = useState( rem );
    const [numbcollection, setNumbcollection] = useState(collection.slice(random));
    const [totsum, settotsum] = useState(0);


    const Nexts = (num) => {

        const currentStarts = numbcollection.length;

        if(currentStarts == (totsum + num) ) {
            const min = 1, max = 9;
            const random =  ( Math.floor( ( Math.random() * (max - min) + min  )) );

            setNumbcollection(collection.slice(random));
            setRandom(random);
            settotsum(0);

        }else{
            settotsum((totsum + num));
        }
        
        
    }

    

    return (
        <div className="Cbox">
            <StarPad slist={numbcollection} /> 
            <NumberPad list={collection.slice(1)} onClick={Nexts} />
            <br/>
        </div>
    );
}

export default StarGame;
