#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

const vec4 RED=vec4(1,0,0, 1 );
const vec4 YELLOW=vec4(1,1,0, 1);

uniform int nstripes = 16;
uniform vec2 origin=vec2(0,0);

void main()
{
  	fragColor = int(distance(origin,vtexCoord) * nstripes) % 2 == 0 ? RED : YELLOW;
}  
