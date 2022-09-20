import { PhotoContainer, SocialNetwork } from "./style";
import { socialNetworks } from '../../../../assets/icons'
import myPhoto from '../../../../assets/images/my-photo.png'
import { useEffect, useState } from "react";

export function Photo() {
    const [ activeItemId, setActiveItemId ] = useState(1);

    
    useEffect(() => {
        let interval: number;
        
        interval = setInterval(() => {
            setActiveItemId(state => {
                let count = state;
                count += 1;
                if(count > socialNetworks.length) {
                    count = 1;
                }
                return count;
            });
        }, 2000)
        console.log(activeItemId)

        return () => {
            clearInterval(interval);
        }
    }, [activeItemId]);
    
    return (
        <PhotoContainer>
            <img src={myPhoto} alt="Foto do Desenvolvedor" />
            {socialNetworks.map(item => {
                const isAcitve = item.id == activeItemId;
                return (
                    <SocialNetwork 
                        id={`teste${item.id}`} 
                        key={item.id} 
                        className={isAcitve ? 'active' : ''}
                        href={item.link}
                        target='_blank'
                    >
                        <div>
                            <img src={item.socialNetwork} alt="" />
                        </div>
                    </SocialNetwork>
                )
            })}
        </PhotoContainer>   
    )
}