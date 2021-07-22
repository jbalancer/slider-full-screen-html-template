var
	slidePlace  = sel('.slide-place'),
	slideLeft   = sel('.slide-place .left'),
	slideRight  = sel('.slide-place .right'),
	previewImg  = sel('.bg-img'),
	slideImages = document.querySelectorAll('.image'),
	maxImgCount = slideImages.length;

slidePlace.style.width = window.innerWidth + 'px';
slidePlace.style.height = window.innerHeight + 'px';

for (var i = 0; i < maxImgCount; i++)
{
	slideImages[i].setAttribute('data-num', i + 1);
}

slideLeft.addEventListener('click', function (){

	slideImage('left');

});

slideRight.addEventListener('click', function (){

	slideImage('right');

});

function sel(text)
{
	return document.querySelector(text);
}

function slideImage(type)
{
	var
		currentImg = sel('.image.current'),
		currentNum = currentImg.getAttribute('data-num');

	currentImg.setAttribute('class', 'image');

	if ( type == 'left' )
	{
		if ( currentNum != 1 )
		{
			currentNum--;
		}
		else if ( currentNum == 1 )
		{
			currentNum = maxImgCount;
		}
	}
	else if ( type == 'right' )
	{
		if ( currentNum != maxImgCount )
		{
			currentNum++;
		}
		else if ( currentNum == maxImgCount )
		{
			currentNum = 1;
		}
	}

	var
		currentNew = sel('.image[data-num="' + currentNum + '"]') || currentImg;

	previewImg.style.backgroundImage = 'url(' + (currentNew.getAttribute('data-src')) + ')';

	currentNew.setAttribute('class', 'image current');
}