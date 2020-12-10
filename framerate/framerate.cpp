#include "framerate.h"
#include "glwidget.h"

void Framerate::onPluginLoad()
{
	elapsedTimer.start();
}

void Framerate::preFrame()
{
	
}

void Framerate::postFrame()
{
	float elapsed = (float) elapsedTimer.elapsed();
	
	float frames = 1000.0 / elapsed;
	QFont font;
  font.setPixelSize(15);
  painter.begin(glwidget());
  painter.setFont(font);
  int x = 15;
  int y = 15;
  QString st = "FPS: \%1";
  painter.drawText(x, y, st.arg(frames)); 
  painter.end();
  elapsedTimer.start();
}

void Framerate::onObjectAdd()
{
	
}

bool Framerate::drawScene()
{
	return false; // return true only if implemented
}

bool Framerate::drawObject(int)
{
	return false; // return true only if implemented
}

bool Framerate::paintGL()
{
	return false; // return true only if implemented
}

void Framerate::keyPressEvent(QKeyEvent *)
{
	
}

void Framerate::mouseMoveEvent(QMouseEvent *)
{
	
}

