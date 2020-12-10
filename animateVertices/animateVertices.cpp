#include "animateVertices.h"
#include "glwidget.h"

void AnimateVertices::onPluginLoad()
{
	 // Carregar shader, compile & link 
    QString vs_src = "#version 330 core\n"
"layout (location = 0) in vec3 vertex;layout (location = 1) in vec3 normal;out vec4 frontColor;out vec2 vtexCoord;uniform mat4 modelViewProjectionMatrix;uniform mat3 normalMatrix;uniform float amplitude = 0.1;uniform float freq = 1; uniform float time;void main(){vec3 V = vertex + normal * abs(amplitude * sin(acos(-1.0) * 2 * freq * time));vec3 N = normalize(normalMatrix * normal);frontColor = vec4(vec3(N.z), 1.0);gl_Position = modelViewProjectionMatrix * vec4(V, 1.0);}";
    vs = new QOpenGLShader(QOpenGLShader::Vertex, this);
    vs->compileSourceCode(vs_src);
    cout << "VS log:" << vs->log().toStdString() << endl;

    QString fs_src =
      "#version 330 core\n"
      "out vec4 fragColor;"
      "in vec4 frontColor;"
      "void main() {"
      "  fragColor=frontColor;"
      "}";
    fs = new QOpenGLShader(QOpenGLShader::Fragment, this);
    fs->compileSourceCode(fs_src);
    cout << "FS log:" << fs->log().toStdString() << endl;

    program = new QOpenGLShaderProgram(this);
    program->addShader(vs);
    program->addShader(fs);
    program->link();
    cout << "Link log:" << program->log().toStdString() << endl;
    elapsedTimer.start();

}

void AnimateVertices::preFrame()
{
	// bind shader and define uniforms
    program->bind();
    program->setUniformValue("time", 6);
    QMatrix4x4 MVP = camera()->projectionMatrix() * camera()->viewMatrix();
    program->setUniformValue("modelViewProjectionMatrix", MVP); 
    QMatrix3x3 NM=camera()->viewMatrix().normalMatrix();
    program->setUniformValue("normalMatrix", NM);
    program->setUniformValue("time", float(elapsedTimer.elapsed()/1000.0f));
}

void AnimateVertices::postFrame()
{
	// unbind shader
    program->release();
}

void AnimateVertices::onObjectAdd()
{
	
}

bool AnimateVertices::drawScene()
{
	return false; // return true only if implemented
}

bool AnimateVertices::drawObject(int)
{
	return false; // return true only if implemented
}

bool AnimateVertices::paintGL()
{
	return false; // return true only if implemented
}

void AnimateVertices::keyPressEvent(QKeyEvent *)
{
	
}

void AnimateVertices::mouseMoveEvent(QMouseEvent *)
{
	
}

