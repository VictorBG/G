#version 330 core
        
layout(triangles) in;
layout(triangle_strip, max_vertices = 36) out;

uniform float time;
uniform mat4 modelViewProjectionMatrix;
const float speed = 0.5;

in vec4 vfrontColor[];
in vec3 norm[];
out vec4 gfrontColor;


void main( void )
{
	vec3 n = vec3(0);
	for( int i = 0 ; i < 3 ; i++ )
	{
		n += norm[i];
	}
	
	n /= 3;
	
	for( int i = 0 ; i < 3 ; i++ )
	{
		gfrontColor = vfrontColor[i];
		gl_Position = modelViewProjectionMatrix * vec4((gl_in[i].gl_Position.xyz + speed * time * n), 1);
		EmitVertex();
	}
    EndPrimitive();
}
