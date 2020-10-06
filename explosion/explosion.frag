#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;
uniform sampler2D explosion;

uniform float time;
uniform float slice = 1.0/30.0;

uniform float x_proportion = 1.0/8.0;
uniform float y_proportion = 1.0/6.0;

void main()
{
	
	int frameNumber = int(mod(time/slice, 48));
	
	// Calculamos el desplazamiento respecto al frame que nos toca
	// el 5 es porque tenemos 6 filas pero el 0,0 empiza abajo, asi que el primero que deberia ser es la fila 6
	// que empieza en (x, 5 * y_proportion)
	vec2 startPos = vec2((frameNumber % 8) * x_proportion, (5-(frameNumber / 8)) *y_proportion);
	// La multiplicacion es para dividir el frame, es decir, que no pille toda la textura sino la proporcion que queremos
    fragColor =  frontColor * texture(explosion, (vtexCoord * vec2(x_proportion, y_proportion)) + startPos);
    fragColor *= fragColor.a;
}
