#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform float n = 8;
uniform bool classic;


const vec4 RED=vec4(1, 0, 0, 1);
const vec4 WHITE=vec4(vec3(1), 1);

const float rad = 0.2;
const vec2 center = vec2(0.5);
const float phi = 3.1416/16.0;

void main()
{

	if (distance(vtexCoord, center) <= rad) {
		fragColor = RED;
		return;
	} 
	
	if(!classic) {
		vec2 u = center - vtexCoord;
		float ang = atan(u.x, u.y);
		if (mod(ang / phi + 0.5, 2) < 1) {
			fragColor = RED;
			return;
		}
	}
	
	fragColor = WHITE;
	

	
	
}
