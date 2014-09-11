<?php
class photos
{
	function get_dir($dir) //function to get all photos in dir only jpeg files
	{
		$dir_name=array();
		if (is_dir($dir))
	 	{
	   		if ($dh = opendir($dir)) //opens dir
	   		{
		   		if(file_exists($dir)==1)
		   		{
			   		while (($file = readdir($dh)) !== false)
					{
						
					if($file=="." or $file=="..")		
					{
						continue;
					}
					
						$dir_name[] = $file;//store name
						
				}
			}
		closedir($dh);
	   		}
		}
	return $dir_name; //array
	//unset($this->photo_name);
	}
}//class closed
?>