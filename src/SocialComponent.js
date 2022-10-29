import {
  RiInstagramLine,
  RiTwitterFill,
  RiYoutubeFill,
  RiSoundcloudFill,
} from "react-icons/ri";

export function InstagramComponent({instaURL}){
 
 return( 
   <> { instaURL ? 
  <div> 
  <RiInstagramLine />
<a href={instaURL}>{"Instagram"}</a> 
</div>
: <div><RiInstagramLine />No Instagram record</div>}
</>
 )  
}

export function TwitterComponent({TwitURL}){
 
  return  <div> 
      <RiTwitterFill/>
   <a href={TwitURL}>{"Twitter"}</a> 
   </div>
 }

 export function YoutubeComponent({TubeURL}){
 
  return(
    <> {TubeURL ? 
    <div> 
       <RiYoutubeFill/>
   <a href={TubeURL}>{"YouTube"}</a> 
   </div>
   : <div><RiYoutubeFill/>No Twitter record</div>}
   </>
  )  
 }

 export function SoundcloudComponent({CloudURL}){
 
  return  <div> 
      <RiSoundcloudFill />
   <a href={CloudURL}>{"Soundcloud"}</a> 
   </div>
 }