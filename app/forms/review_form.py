from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, TextAreaField, IntegerField, SelectField, SubmitField, BooleanField
from wtforms.validators import DataRequired, NumberRange, Length
from flask_wtf.file import FileField, FileAllowed, FileRequired
from ..api.aws_helpers import ALLOWED_EXTENSIONS


class ReviewForm(FlaskForm):
    rating = BooleanField('Rating', validators=[DataRequired()])
    review = StringField("Review", validators=[DataRequired(), Length(max = 1000)])
    img = FileField("Game Image", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    submit = SubmitField("Submit")
