#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform float n = 8;

const vec4 RED=vec4(1, 0, 0, 1);
const vec4 GREEN=vec4(0, 1, 0, 1);
const vec4 YELLOW=vec4(1, 1, 0, 1);
const vec4 BLUE=vec4(0, 0, 1, 1);
const vec4 WHITE=vec4(vec3(1), 1);

const float rad = 0.25;
const vec2 center = vec2(0.5, 0.75/2);

void main()
{

	if (distance(vtexCoord, center) <= rad) {
		fragColor = RED;
		return;
	} 
	
	if (vtexCoord.y < 1/4.0) {
		fragColor = BLUE;
	} else if (vtexCoord.y < 2/4.0) {
		fragColor = YELLOW;
	} else if (vtexCoord.y < 3/4.0){
		fragColor = GREEN;
	} else {
		discard;
	}
	
}  
