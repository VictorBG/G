#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

const vec4 RED=vec4(1,0,0, 1);
const vec4 YELLOW=vec4(1,1,0, 1);

void main()
{
	int x=int(abs(fract(vtexCoord.x)*9)) % 2;
  	fragColor = x!=0 ? RED : YELLOW;
}  
