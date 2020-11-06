#version 330 core

in vec2 vtexCoord;
in vec2 desp;
out vec4 fragColor;

uniform float n = 8;
uniform bool classic;


const vec4 BLACK=vec4(0);

const float rad = 0.05;
const vec2 eye1 = vec2(0.34, 0.65);
const vec2 eye2 = vec2(0.66, 0.65);
const float phi = 3.1416/16.0;

uniform sampler2D colormap;

void main() 
{

	if (distance(vtexCoord, eye1 + desp) <= rad) {
		fragColor = BLACK;
		return;
	} 
	
	if (distance(vtexCoord, eye2 + desp) <= rad) {
		fragColor = BLACK;
		return;
	} 

	fragColor = texture(colormap, vtexCoord);	
}
