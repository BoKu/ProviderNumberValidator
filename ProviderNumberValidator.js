var PLV = {'0': 0,'1': 1,'2': 2,'3': 3,'4': 4,'5': 5,'6': 6,'7': 7,'8': 8,'9': 9,'A': 10,'B': 11,'C': 12,'D': 13,'E': 14,'F': 15,'G': 16,'H': 17,'J': 18,'K': 19,'L': 20,'M': 21,'N': 22,'P': 23,'Q': 24,'R': 25,'T': 26,'U': 27,'V': 28,'W': 29,'X': 30,'Y': 31};
var CheckDigit = {0: 'Y',1: 'X',2: 'W',3: 'T',4: 'L',5: 'K',6: 'J',7: 'H',8: 'F',9: 'B',10: 'A'}


function ProviderNumberValidate(ProviderNumber)
{
	var CheckSum = 0;

	ProviderNumber = ProviderNumber.trim().toUpperCase();
	if (ProviderNumber.length < 7 || ProviderNumber.length > 8)
	{
		return false;
	}

	if (ProviderNumber.length == 7)
	{
		ProviderNumber = '0' + ProviderNumber;
	}

	for (var i = 0; i < 6; i++)
	{
		if (!isNumber(ProviderNumber[i]))
		{
			return false;
		}
		switch (i)
		{
			case 0:
				CheckSum += parseInt(ProviderNumber[i]) * 3;
				break;
			case 1:
				CheckSum += parseInt(ProviderNumber[i]) * 5;
				break;
			case 2:
				CheckSum += parseInt(ProviderNumber[i]) * 8;
				break;
			case 3:
				CheckSum += parseInt(ProviderNumber[i]) * 4;
				break;
			case 4:
				CheckSum += parseInt(ProviderNumber[i]) * 2;
				break;
			case 5:
				CheckSum += parseInt(ProviderNumber[i]);
				break;
		}
	}

	CheckSum += PLV[ProviderNumber[6]] * 6;

	CheckSum = CheckSum % 11;

	if ((CheckSum in CheckDigit) && ProviderNumber[7] == CheckDigit[CheckSum])
	{
		return true;
	}
	else
	{
		return false;
	}
}

function isNumber(n)
{
	return !isNaN(parseFloat(n)) && isFinite(n);
}
