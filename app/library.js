



module.exports= {
	computeAverage(X,Y,Z) {
	average = (X + Y + Z)/3;
	return average;
},
convertTempCtoF(C) {
  F = ((9/5) * C) + 32;
  
  return F;
},
convertTempFtoC(F) {
  C = 5/9 * (F - 32);
  return C;	
},
computeFactorial(N) {
  if(N === 1) {
	return 1  
  }else {
	fac = N * computeFactorial(N - 1);  
	  
  }return fac;

}

};
	