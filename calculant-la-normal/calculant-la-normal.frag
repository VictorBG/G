#version 330 core

in vec4 frontColor;
in vec3 pos;
out vec4 fragColor;

void main()
{
	vec3 x = dFdx(pos).xyz;
	vec3 y = dFdy(pos).xyz;
	
	vec3 N = normalize(cross(x, y));
    fragColor = frontColor * N.z;
}
