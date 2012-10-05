// JavaScript Document
function o3(i,val,gridz)
{
	var x=0;
		if(i<54)
		{
			if(gridz[i+5]==0||(gridz[i+5]>val&&gridz[i+5]<0))
			x=x+1;
			if(gridz[i+6]==0||(gridz[i+6]>val&&gridz[i+6]<0))
			x=x+1;
			if(gridz[i+11]==0||(gridz[i+11]>val&&gridz[i+11]<0))
			x=x+1;
		}
	
	
			if(i>10&&(!(x==0&&i<54)))
			{
				x=0;
			if(gridz[i-5]==0||(gridz[i-5]>val&&gridz[i-5]<0))
			x=x+1;
			if(gridz[i-6]==0||(gridz[i-6]>val&&gridz[i-6]<0))
			x=x+1;
			if(gridz[i-11]==0||(gridz[i-11]>val&&gridz[i-11]<0))
			x=x+1;
		
			}		
			return x;
}
function o4(s1,s2,i,val,gridz)
{var x=0;
		if(i!=s2)
			{
			if(gridz[i-5]==0||(gridz[i-5]>val&&gridz[i-5]<0))
			x=x+1;
			if(gridz[i+1]==0||(gridz[i+1]>val&&gridz[i+1]<0))
			x=x+1;
			if(gridz[i+6]==0||(gridz[i+6]>val&&gridz[i+6]<0))
			x=x+1;

			}
			if(i!=s1 &&(!(x==0&&i!=s2)))
			{
			x=0;
			if(gridz[i-6]==0||(gridz[i-6]>val&&gridz[i-6]<0))
			x=x+1;
			if(gridz[i-1]==0||(gridz[i-1]>val&&gridz[i-1]<0))
			x=x+1;
			if(gridz[i+5]==0||(gridz[i+5]>val&&gridz[i+5]<0))
			x=x+1;
			}
						

			return x;
}
function opti1(grid1,val)
{
	 var cou=new Array();
	

	for(var i=0;i<60;i++)
{
	cou[i]=0;
	if(grid1[i]==0)
	{
		if(i<5)
		{
			cou[i]=o3(i,val,grid1);
			
		}else if(i<11)
		{
			cou[i]=o4(5,10,i,val,grid1);
			
		}else if(i<16)
		{
			cou[i]=o3(i,val,grid1);
			
		}else if(i<22)
		{
			cou[i]=o4(16,21,i,val,grid1);
		}else if(i<27)
		{
			cou[i]=o3(i,val,grid1);
		}else if(i<33)
		{
			cou[i]=o4(27,32,i,val,grid1);
		}else if(i<38)
		{
			cou[i]=o3(i,val,grid1);
		}
		else if(i<44)
		{
			cou[i]=o4(38,43,i,val,grid1);
		}else if(i<49)
		{
			cou[i]=o3(i,val,grid1);
		}else if(i<55)
		{
	
			cou[i]=o4(49,54,i,val,grid1);

		}
		else if(i<60)
		{
	
			cou[i]=o3(i,val,grid1);

		}
	}

}
	return cou;}
